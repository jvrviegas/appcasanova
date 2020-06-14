import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useMutation } from '@apollo/react-hooks';

import { AUTH_USER } from '../services/gqlqueries';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);
  const [obterToken, { data, error }] = useMutation(AUTH_USER);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const token = await AsyncStorage.getItem('@CasaNova:token');

      if (token) {
        setSigned(true);
        setToken({ token });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      await obterToken({ variables: { username: email, password } })
        .then(async ({ data }) => {
          setToken({ token: data.obterToken.token });
          setSigned(true);
          await AsyncStorage.setItem('@CasaNova:token', data.obterToken.token);
          return;
        })
        .catch((err) => {
          if (err) {
            return new Error('Credenciais inválidas');
          }
        });
    },

    [obterToken],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@CasaNova:token');
    setSigned(false);
    setToken({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, loading, signed }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
