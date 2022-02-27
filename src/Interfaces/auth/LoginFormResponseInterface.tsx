import UserInterface from "./UserInterface";

export default interface LoginFormResponseInterface {
  status: "fail" | "success";
  player: UserInterface;
  error: string;
}
