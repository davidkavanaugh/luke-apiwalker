import React from "react";
import { navigate } from '@reach/router'

const Search = props => {
  const style = {
    search: {
      outline: "1px solid black",
      padding: "25px 0px",
      display: "flex",
      justifyContent: "center",
    },
    formGroup: {
      marginRight: "50px",
    },
  };

  const { 
    selection,
    updateSelection,
    id,
    updateId, } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selection && id) navigate(`/${selection}/${id}`);
  }

  return (
    <form style={style.search} onSubmit={handleSubmit}>
      <div style={style.formGroup}>
        <label htmlFor="resource">Search for: </label>
        <select
          name="resource"
          style={{ minWidth: "175px", height: "20px" }}
          value={selection}
          onChange={(e) => updateSelection(e.target.value)}
        >
          <option value=""> -- </option>
          <option value="people">people</option>
          <option value="planets">planets</option>
        </select>
      </div>
      <div style={style.formGroup}>
        <label htmlFor="id">ID: </label>
        <input
          name="id"
          style={{ width: "25px", marginRight: "10px" }}
          value={id}
          onChange={(e) => updateId(e.target.value)}
        />
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default Search;
