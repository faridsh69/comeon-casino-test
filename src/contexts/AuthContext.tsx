import React from "react";
import AuthContextInterface from "../interfaces/auth/AuthContextInterface";
import AuthProviderPropsInterface from "../interfaces/auth/AuthProviderPropsInterface";
import UserInterface from "../interfaces/auth/UserInterface";

const guestUser: UserInterface = {
  username: "",
  name: "",
  avatar: "",
  event: "",
};
const databaseName = "casino-authenticated-user";

const AuthContext = React.createContext<AuthContextInterface>({
  user: guestUser,
  isUserLoggedIn: false,
  login: (user: UserInterface) => {},
  logout: () => {},
});

export function AuthProvider(props: AuthProviderPropsInterface): JSX.Element {
  const initialUserJson = localStorage.getItem(databaseName);
  const initialUser = initialUserJson ? JSON.parse(initialUserJson) : guestUser;
  const [user, setUser] = React.useState<UserInterface>(initialUser);

  const isUserLoggedIn = !!user.username;

  const login = (user: UserInterface): void => {
    localStorage.setItem(databaseName, JSON.stringify(user));
    setUser(user);
  };

  const logout = (): void => {
    localStorage.setItem(databaseName, JSON.stringify({}));
    setUser(guestUser);
  };

  const contextValue: AuthContextInterface = {
    user,
    isUserLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue} {...props} />;
}

export function useAuth(): AuthContextInterface {
  const context = React.useContext<AuthContextInterface>(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
