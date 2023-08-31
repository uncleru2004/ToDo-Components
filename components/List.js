import { useCallback } from "react";
import CheckedDelButton from "./CheckedDelButton";
import Item from "./Item";

export default function List({
  list,
  changeCheckedItem,
  deleteItem,
  delChecked,
}) {
  console.log("List rendered");

  const delCheckedItem = useCallback(() => {
    delChecked();
  }, []);

  return (
    <fieldset>
      <legend>List of goals</legend>
      {list.map((item) => (
        <Item
          key={item.id}
          item={item}
          changeCheckedItem={changeCheckedItem}
          deleteItem={deleteItem}
        />
      ))}
      <CheckedDelButton delCheckedItem={delCheckedItem} />
    </fieldset>
  );
}
