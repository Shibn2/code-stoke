import React, { useState, useEffect } from "react";
import SearchSelector from "../../atoms/searchSelector/searchSelector";

const SEARCH_RESULTS = {
  title: "Shirt selection",
  searchResults: [
    {
      label: "Adidias TShirt",
      value: "adidas_tshirt",
    },
    {
      label: "Nike Sports wear",
      value: "nike_sports_wear",
    },
    {
      label: "Polo Shirt",
      value: "polo_shirt",
    },
  ],
};

function InputComponentPlaybook() {
  const [filterSelection, setFilterSelection] = useState([]);
  const [sortSelection, setSortSelection] = useState("");
  const [searchSelection, setSearchSelection] = useState("");

  useEffect(() => {
    console.log(
      "searchSelection:",
      searchSelection,
      "sortSelection:",
      sortSelection,
      "filterSelection:",
      filterSelection
    );
  });

  const handleChangeSelection = (type, value) => {
    if (type === "search") {
      setSearchSelection(value);
    }
  };
  return (
    <div className="input-playbook">
      <SearchSelector
        handleSelection={handleChangeSelection}
        searchResults={SEARCH_RESULTS?.searchResults}
        selectionName="search_select"
        sectionTitle={SEARCH_RESULTS?.title}
        containerClassName=""
      />
    </div>
  );
}

export default InputComponentPlaybook;

// {
//     searchResults: {
//     label:'',
//     id:
// },
//     selectionName
//     handleSelection,
//     sectionTitle,
//     containerClassName,
// }
