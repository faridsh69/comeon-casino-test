export default interface RouteItemInterface {
  name: string;
  path: string;
  component: React.FC;
  middlware: "auth" | "guest" | null;
}
