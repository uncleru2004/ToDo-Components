import { memo } from "react";

export default memo(function AddButton({ onClick }) {
  console.log("Button rendered");

  return <button onClick={onClick}>Add</button>;
});
