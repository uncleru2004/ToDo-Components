import { memo, useState, useCallback, useRef } from "react";
import AddButton from "./AddButton";

export default memo(function Form({ AddClick }) {
  console.log("Form rendered");

  const [value, setValue] = useState(""),
    textRef = useRef(""),
    onClick = useCallback(() => {
      AddClick(textRef.current);
      setValue("");
    }, [AddClick]);

  textRef.current = value;

  return (
    <fieldset>
      <legend>Form</legend>
      <input
        type="text"
        value={value}
        onInput={(event) => setValue(event.target.value)}
      />

      <AddButton onClick={onClick} />
    </fieldset>
  );
});
