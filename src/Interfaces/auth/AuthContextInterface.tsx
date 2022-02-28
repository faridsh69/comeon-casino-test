import UserInterface from "./UserInterface";

export default interface AuthContextInterface {
  user: UserInterface;
  isUserLoggedIn: boolean;
  login: (user: UserInterface) => void;
  logout: () => void;
}
