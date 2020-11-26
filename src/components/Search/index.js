function Search(props) {
  function handleChange(event) {
    const { value } = event.target;
    props.handleCallback(value);
  }

  return (
    <>
      <input type="text" className="input" onChange={handleChange} />
    </>
  );
}

export default Search;
