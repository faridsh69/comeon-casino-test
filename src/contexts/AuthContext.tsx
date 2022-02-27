import React from "react";
import AuthContextInterface from "../interfaces/auth/AuthContextInterface";
import AuthProviderPropsInterface from "../interfaces/auth/AuthProviderPropsInterface";
import UserInterface from "../interfaces/auth/UserInterface";

const AuthContext = React.createContext<AuthContextInterface>({
  user: {},
  isUserLoggedIn: false,
  login: (user: UserInterface) => {},
  logout: () => {},
});

export function AuthProvider(props: AuthProviderPropsInterface): JSX.Element {
  const initialUserJson = localStorage.getItem("casino");
  const initialUser = initialUserJson ? JSON.parse(initialUserJson) : {};
  const [user, setUser] = React.useState<Partial<UserInterface>>(initialUser);

  const isUserLoggedIn = !!user.name;

  const login = (user: UserInterface): void => {
    localStorage.setItem("casino", JSON.stringify(user));
    setUser(user);
  };

  const logout = (): void => {
    localStorage.setItem("casino", JSON.stringify({}));
    setUser({});
  };

  const contextValue: AuthContextInterface = {
    user,
    isUserLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue} {...props} />;
}

export default function useAuth(): AuthContextInterface {
  const context = React.useContext<AuthContextInterface>(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
