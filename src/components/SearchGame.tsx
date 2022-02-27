import React from "react";

import SearchGamePropsInterface from "../interfaces/game/SearchGamePropsInterface";

export default function SearchGame(
  props: SearchGamePropsInterface
): JSX.Element {
  const { casinoState, casinoDispatch } = props;
  const { message, games } = casinoState;

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLTextAreaElement;

    casinoDispatch({
      type: "filterSearch",
      message,
      games,
      filteredWord: target.value,
    });
  };

  return (
    <div className="search ui small icon input">
      <input type="text" placeholder="Search Game" onChange={handleChange} />
      <i className="search icon"></i>
    </div>
  );
}
