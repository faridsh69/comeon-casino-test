import React from "react";
import CategoryInterface from "../interfaces/CategoryInterface";
import CategoryStateInterface from "../interfaces/CategoryStateInterface";

import { getCategories } from "../Services/CasinoService";
import CategoryItem from "./CategoryItem";

export default function GameItems(): JSX.Element {
  const [state, setState] = React.useState<CategoryStateInterface>({
    categories: [],
    loading: true,
    message: "",
  });
  const { loading, message, categories } = state;

  React.useEffect(() => {
    getCategories()
      .then((response: CategoryInterface[]) => {
        setState({ ...state, categories: response, loading: false });
      })
      .catch((error) => {
        setState({ ...state, message: error.message, loading: false });
      });
  }, []);

  if (loading) return <>Loading...</>;

  if (message)
    return (
      <div className="ui warning message">
        <div className="header">{message}</div>
      </div>
    );

  if (!categories.length)
    return (
      <div className="ui info message">
        <div className="header">No categories found!</div>
      </div>
    );

  return (
    <>
      {categories.map((category: CategoryInterface) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </>
  );
}
