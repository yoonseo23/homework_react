import { useId, useState } from "react"
import beanLogo from "./../image/bean-logo.svg"
import searchButton from "./../image/search-button.svg"
import beanData from "./beans.json"
import detailData from "./datas.json"
import "./main-page.css"

export default function MainPage() {
  const [query, setQuery] = useState("")
  const [selectedFlavor, setSelectedFlavor] = useState("")
  const [selectedRoast, setSelectedRoast] = useState("")

  const filteredBeans = beanData.filter(({ name, flavorNotes = [], roast }) => {
    const byName = query ? name.toLowerCase().includes(query.toLowerCase()) : true
    const byFlavor = selectedFlavor ? flavorNotes.includes(selectedFlavor) : true
    const byRoast  = selectedRoast ? roast === selectedRoast : true
    return byName && byFlavor && byRoast
  })

  const clearFilters = () => {
    setQuery("")
    setSelectedFlavor("")
    setSelectedRoast("")
  }

  return (
    <main className="mainPage">
      <Logo />
      <SearchBar onSearch={(value) => setQuery(value)} />
      <FilterList
        selectedFlavor={selectedFlavor}
        onToggleFlavor={(tag) =>
          setSelectedFlavor(prev => (prev === tag ? "" : tag))
        }
        selectedRoast={selectedRoast}
        onToggleRoast={(tag) =>
          setSelectedRoast(prev => (prev === tag ? "" : tag))
        }
        onClear={clearFilters}
      />
      <CardList beans={filteredBeans} />
    </main>
  )}

  function Logo() {
    return (
      <img className="logo" src={beanLogo} alt="BeanFinder 로고" width={360} height={360} />
    )
  }

  function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState("")
    const id = useId()
    const handleSearch = (e) => {
      e.preventDefault()
      onSearch(inputValue)
    }

    return (
      <form className="searchBar" onSubmit={handleSearch}>
        {/* <label htmlFor={id} className="sr-only">원두 이름 검색</label> */}
        <input className="searchBar__input" id={id} type="search" placeholder="Search Bean Name..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button className="searchBar__searchButton" type="submit" aria-label="검색">
          <img src={searchButton} alt="" width={48} height={48}/>
        </button>
      </form>
    )
  }
  function FilterList({ selectedFlavor, onToggleFlavor, selectedRoast, onToggleRoast, onClear}) {
    return (
      <section className="filterList">
        <TagFlavors selected={selectedFlavor} onToggle={onToggleFlavor} />
        <TagRoast selected={selectedRoast} onToggle={onToggleRoast} />
        <button className="tagButton reset" type="button" onClick={onClear}>
          Reset Filters
        </button>
      </section>
    )
  }


  // datas.json을 사용
  function TagFlavors({ selected, onToggle}) {
    const tagFlavors = Array.from(new Set(detailData.flavorNotes ?? []))

    return (
      <ul style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {tagFlavors.map((tag) => (
        <li key={tag}>
          <button
            type="button"
            className={`tagButton ${selected === tag ? "is-active" : ""}`}
            onClick={() => onToggle(tag)}
            aria-pressed={selected === tag}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
    )
  }

  function TagRoast({ selected, onToggle }) {
    const tagRoast = Array.from(new Set(detailData.roast ?? []))

    return (
      <ul style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {tagRoast.map((tag) => (
        <li key={tag}>
          <button
            type="button"
            className={`tagButton beanRoast ${selected === tag ? "is-active" : ""}`}
            onClick={() => onToggle(tag)}
            aria-pressed={selected === tag}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
    )
  }

  function CardList({ beans = [] }) {
    if (!Array.isArray(beans) || beans.length === 0) {
      return <p className="empty">조건에 맞는 원두가 없습니다.</p>
    }

    return (
      <section className="cardList">
        {
        beans.map(({id: beanId, name: beanName, roast: beanRoast, origin: beanOrigin, flavorNotes = []}) => {

          return (
            <article className="card" key={beanId}>
              <h2 className="beanName">{beanName}</h2>
              <CardFlavorTags flavorNotes={flavorNotes}/>
              <span className="beanRoast tag tagblock" >{beanRoast}</span>
              <p className="beanOrigin">{beanOrigin}</p>
            </article>
          )
        })
        }
      </section>
    )
  }

  function CardFlavorTags({flavorNotes = []}) {
    const flavorList = flavorNotes
    if (!Array.isArray(flavorNotes) || flavorNotes.length === 0) return null

    return (
      <ul style={{ "display": "flex", "flexWrap": "wrap"}}>
        {
          flavorList.map((tag) => {
          return <li key={tag}><span className="tag tagblock" >{tag}</span></li>
        })
        }
      </ul>
    )
  }

