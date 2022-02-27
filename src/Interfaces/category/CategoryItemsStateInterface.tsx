import CategoryInterface from "./CategoryInterface";

export default interface CategoryItemsStateInterface {
  loading: boolean;
  errorMessage: string;
  categories: CategoryInterface[];
}
