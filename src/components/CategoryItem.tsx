import CategoryItemPropsInterface from "../interfaces/category/CategoryItemPropsInterface";

export default function CategoryItem(
  props: CategoryItemPropsInterface
): JSX.Element {
  const { category } = props;

  const handleClick = (categoryId: number) => {
    // casinoDispatch({
    //   type: "filterSearch",
    //   message,
    //   games,
    //   filteredWord: target.value,
    // });
  };

  return (
    <div className="category item" onClick={() => handleClick(category.id)}>
      <div className="content">
        <div className="header">{category.name}</div>
      </div>
    </div>
  );
}
