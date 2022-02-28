import React from "react";
import { useParams } from "react-router-dom";
import ComeonInterface from "../interfaces/game/ComeonInterface";

import BackButton from "./../components/BackButton";

declare global {
  interface Window {
    comeon: ComeonInterface;
  }
}

export default function InGame(): JSX.Element {
  const params = useParams();
  const code = params.code;

  React.useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = "/lib/comeon.game-1.0.min.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      window.comeon.game.launch(code as string);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ingame">
      <div className="ui grid centered stackable">
        <div className="three wide column">
          <BackButton />
        </div>
        <div className="ten wide column">
          <div id="game-launch"></div>
        </div>
        <div className="three wide column"></div>
      </div>
    </div>
  );
}
