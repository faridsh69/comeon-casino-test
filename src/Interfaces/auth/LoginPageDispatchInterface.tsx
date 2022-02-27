export default interface LoginPageDispatchInterface {
  type: "pending" | "rejected";
  message: string;
}
