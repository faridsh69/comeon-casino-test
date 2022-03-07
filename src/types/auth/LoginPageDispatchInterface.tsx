import UserInterface from "./UserInterface";

export default interface LoginPageDispatchInterface {
  type: "pending" | "rejected" | "resolved";
  error?: string;
  user?: UserInterface;
}
