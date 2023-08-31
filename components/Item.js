import { memo } from "react";
import css from "./comp.module.css";

export default memo(function Item({ item, changeCheckedItem, deleteItem }) {
  const { id, checked, text } = item;

  console.log("Item rendered", id);

  return (
    <li title={id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => changeCheckedItem(id)}
      />

      <span>{text}</span>
      <button className={css.btnDel} onClick={() => deleteItem(id)}>
        X
      </button>
    </li>
  );
});
