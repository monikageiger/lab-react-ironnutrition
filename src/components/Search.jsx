import { Divider, Input } from "antd";
import { useState } from "react";
// Iteration 5
function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    props.filterFoodList(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchTerm} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
