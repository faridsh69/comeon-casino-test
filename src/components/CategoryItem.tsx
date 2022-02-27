import CategoryItemPropsInterface from "../interfaces/CategoryItemPropsInterface";

export default function CategoryItem(
  props: CategoryItemPropsInterface
): JSX.Element {
  const { category } = props;

  return (
    <div className="category item">
      <div className="content">
        <div className="header">{category.name}</div>
      </div>
    </div>
  );
}
