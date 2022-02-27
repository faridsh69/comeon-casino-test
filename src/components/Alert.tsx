import AlertPropsInterface from "../interfaces/AlertPropsInterface";

export default function Alert(props: AlertPropsInterface) {
  const { message, status } = props;
  return (
    <div className={`ui message ${status}`}>
      <div className="header">{message}</div>
    </div>
  );
}
