import React from "react";

import useCasinoContext from "../contexts/CasinoContext";

export default function SearchGame(): JSX.Element {
  const casinoContext = useCasinoContext();

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLTextAreaElement;
    casinoContext.filterByName(target.value);
    // casinoDispatch({
    //   type: "filterSearch",
    //   message,
    //   games,
    //   filteredWord: target.value,
    // });
  };

  return (
    <div className="search ui small icon input">
      <input type="text" placeholder="Search Game" onChange={handleChange} />
      <i className="search icon"></i>
    </div>
  );
}
