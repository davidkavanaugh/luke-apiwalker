import { useState } from "react";
import axios from "axios";

export default (init = []) => {
  const [data, setData] = useState(init);
  const [selection, setSelection] = useState("");
  const [id, setId] = useState("");

  const getData = (selection, id) => {
    axios
      .get(`https://swapi.dev/api/${selection}/${id}`)
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .catch((err) => {
        throw new Error({
          error: err,
          message: "These aren't the droids you're looking for",
        });
      });
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
