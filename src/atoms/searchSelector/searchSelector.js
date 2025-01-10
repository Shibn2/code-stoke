function SearchSelector({
  searchResults,
  handleSelection,
  sectionTitle,
  selectionName,
}) {
  return (
    <select
      name={selectionName}
      onChange={(e) => handleSelection("search", e.target.value)}
    >
      {searchResults.length
        ? searchResults.map((searchValue) => (
            <option value={searchValue.value}>{searchValue.label}</option>
          ))
        : null}
    </select>
  );
}

export default SearchSelector;

// {
//     searchResults: {
//     label:'',
//     id:'',
//      value: '',
// },
//     selectionName
//     handleSelection,
//     sectionTitle,
//     containerClassName,
// }
