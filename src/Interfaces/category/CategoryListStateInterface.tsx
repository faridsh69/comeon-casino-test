import CategoryInterface from "./CategoryInterface";

export default interface CategoryListStateInterface {
  loading: boolean;
  errorMessage: string;
  categories: CategoryInterface[];
}
