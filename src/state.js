import { useState } from "react";
import axios from "axios";
import NotFoundError from "./NotFoundError";

export default (init = []) => {
  const [data, setData] = useState(init);
  const [selection, setSelection] = useState("");
  const [id, setId] = useState("");

  const getData = async (selection, id) => {
    try {
      if (!id) {
        throw new NotFoundError("These aren't the droids you're looking for");
      }
      let response = await axios.get(
        `https://swapi.dev/api/${selection}/${id}`
      );
      return response;
    } catch (err) {
      throw new NotFoundError("These aren't the droids you're looking for");
    }
  };

  const updateId = (id) => {
    setId(id);
  };
  const updateSelection = (selection) => {
    setSelection(selection);
  };
  return {
    data,
    setData,
    getData,
    selection,
    updateSelection,
    id,
    updateId,
  };
};
