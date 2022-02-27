import { useNavigate } from "react-router-dom";

export default function BackButton(): JSX.Element {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/casino");
  };

  return (
    <div
      className="ui right floated secondary button inverted"
      onClick={goBack}
    >
      <i className="left chevron icon"></i>Back
    </div>
  );
}
