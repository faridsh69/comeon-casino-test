import CategoryItemPropsInterface from "../interfaces/category/CategoryItemPropsInterface";
import { useCasinoContext } from "../contexts/CasinoContext";

export default function CategoryItem(
  props: CategoryItemPropsInterface
): JSX.Element {
  const casinoContext = useCasinoContext();
  const { category } = props;

  const handleClick = (categoryId: number) => {
    casinoContext.filterByCategory(categoryId);
  };

  return (
    <div className="category item" onClick={() => handleClick(category.id)}>
      <div className="content">
        <div className="header">{category.name}</div>
      </div>
    </div>
  );
}
