import React from "react";

import { getCategories } from "../Services/CasinoService";
import Alert from "./Alert";
import CategoryItem from "./CategoryItem";
import CategoryInterface from "../interfaces/category/CategoryInterface";
import CategoryListStateInterface from "../interfaces/category/CategoryListStateInterface";

export default function CategoryList(): JSX.Element {
  const [state, setState] = React.useState<CategoryListStateInterface>({
    loading: true,
    errorMessage: "",
    categories: [],
  });
  const { loading, errorMessage, categories } = state;

  React.useEffect(() => {
    getCategories()
      .then((response: CategoryInterface[]) => {
        setState({ ...state, categories: response, loading: false });
      })
      .catch((error) => {
        setState({ ...state, errorMessage: error.message, loading: false });
      });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  if (errorMessage) {
    return <Alert status="warning" message={errorMessage} />;
  }

  if (!categories.length) {
    return <Alert status="info" message="No categories found!" />;
  }

  return (
    <>
      {categories.map((category: CategoryInterface) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </>
  );
}
