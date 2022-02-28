import React from "react";

import { getCategories } from "../services/CasinoService";
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
    let isMounted = true;
    const abortController = new AbortController();
    getCategories(abortController)
      .then((response: CategoryInterface[]) => {
        setState({ errorMessage: "", categories: response, loading: false });
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            errorMessage: error.message,
            categories: [],
            loading: false,
          });
        }
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
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
