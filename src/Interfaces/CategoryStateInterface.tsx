import CategoryInterface from "./CategoryInterface";

export default interface CategoryStateInterface {
  categories: CategoryInterface[];
  loading: boolean;
  message: string;
}
