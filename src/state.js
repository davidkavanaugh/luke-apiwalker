import { useState } from "react";

export default (init = []) => {
  const [data, setData] = useState(init);
  const [selection, setSelection] = useState("");
  const [id, setId] = useState("");

  const getData = (selection, id) => {
    console.log(selection, id);
  };

  const updateSelection = (selection) => {
    console.log(selection);
    setSelection(selection);
  };

  const updateId = (id) => {
    console.log(id);
    setId(id);
  };
  return {
    data,
    getData,
    selection,
    updateSelection,
    id,
    updateId,
  };
};
