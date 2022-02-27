export default interface RouteItemInterface {
  name: string;
  path: string;
  component: () => JSX.Element;
  middlware: "auth" | "guest" | null;
}
