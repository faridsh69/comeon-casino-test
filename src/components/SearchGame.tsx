import React from "react";

import { useCasinoContext } from "../contexts/CasinoContext";

export default function SearchGame(): JSX.Element {
  const { filterByName, filterName } = useCasinoContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterByName(event.target.value);
  };

  return (
    <div className="search ui small icon input">
      <input
        type="text"
        placeholder="Search Game"
        onChange={handleChange}
        value={filterName}
      />
      <i className="search icon"></i>
    </div>
  );
}
