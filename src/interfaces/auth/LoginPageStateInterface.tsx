import UserInterface from "./UserInterface";

export default interface LoginPageStateInterface {
  status: "idle" | "pending" | "rejected" | "resolved";
  error?: string;
  user?: UserInterface;
}
