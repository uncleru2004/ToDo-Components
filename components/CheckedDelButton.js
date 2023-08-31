import { memo } from "react";
import css from "./comp.module.css";

export default memo(function CheckedDelButton({ delCheckedItem }) {
  return (
    <button className={css.btnDel} onClick={delCheckedItem}>
      Delete checked goals
    </button>
  );
});
