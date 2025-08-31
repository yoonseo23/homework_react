import { useId, useState } from "react"
import searchButton from "./../image/search-button.svg"

// @ts-ignore
export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("")
  const id = useId()
  // @ts-ignore
  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(inputValue)
  }

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <label htmlFor={id} className="sr-only">원두 이름 검색</label>
      <input className="searchBar__input" id={id} type="search" placeholder="Search Bean Name..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button className="searchBar__searchButton" type="submit" aria-label="검색">
        <img src={searchButton} alt="" width={48} height={48}/>
      </button>
    </form>
  )
}