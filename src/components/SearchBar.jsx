import { useState } from "react";

export function SearchBar(props) {
  const { changeLocation } = props
  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      changeLocation(inputValue);
      localStorage.setItem("Location", inputValue)
      setInputValue('');
    }
  }
  return (

    <form
      className="search-form"
      role="search"
      onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Choose a City"
        aria-label="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
          className="btn btn-outline-success"
          type="submit">Search</button>
      </form>
   
  )
}