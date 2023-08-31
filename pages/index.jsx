import { useState, useCallback } from "react";
//import RenderCard from "../components/RenderCard";
import Form from "../components/Form";
import List from "../components/List";
import typeConfig from "../components/objType";

export default function ToDoList() {
  const [list, setList] = useState([]),
    AddClick = useCallback(
      (newItemText) => setList((old) => old.concat(typeConfig(newItemText))),
      []
    ),
    changeCheckedItem = useCallback(
      (id) =>
        setList((old) =>
          old.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
          )
        ),
      []
    ),
    deleteItem = useCallback(
      (id) => setList((old) => old.filter((item) => item.id !== id)),
      []
    ),
    delChecked = useCallback(() => {
      setList((old) => old.filter((item) => !item.checked));
    }, []);

  return (
    <fieldset>
      <legend>ToDo List</legend>

      <Form AddClick={AddClick} />
      <List
        list={list}
        changeCheckedItem={changeCheckedItem}
        deleteItem={deleteItem}
        delChecked={delChecked}
      />
    </fieldset>
  );
}
