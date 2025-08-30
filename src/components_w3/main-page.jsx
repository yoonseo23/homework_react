import { useId, useState } from "react"
import beanLogo from "./../image/bean-logo.svg"
import searchButton from "./../image/search-button.svg"
import beanData from "./beans.json"
import detailData from "./datas.json"
import "./main-page.css"

export default function MainPage() {
  return (
    <main className="mainPage">
      <Logo />
      <SearchBar />
      <FilterList />
      <CardList />
    </main>
  )}

  function Logo() {
    return (
      <img className="logo" src={beanLogo} alt="BeanFinder 로고" width={360} height={360} />
    )
  }
  function SearchBar() {
    const id = useId()
    const handleSearch = (e) => {
      e.preventDefault()
    }

    return (
      <form className="searchBar" onSubmit={handleSearch}>
        <input className="searchBar__input" id={id} type="search" placeholder="Search Bean Name..." />
        {/* <label htmlFor={id}>원두 이름 검색</label> */}
        <button className="searchBar__searchButton" type="submit">
          <img src={searchButton} alt="검색" width={48} height={48}/>
        </button>
      </form>
    )
  }
  function FilterList() {
    return (
      <section className="filterList">
        <TagFlavors />
        <TagRoast />
      </section>
    )
  }


  // datas.json을 사용
  function TagFlavors() {
    const tagFlavors = Array.from(new Set(detailData.flavorNotes ?? []))

    return (
      <ul style={{ "display": "flex", "flexWrap": "wrap"}}>
        {
        tagFlavors.map((tag) => {
          return <li key={tag}><button className="tagButton" type="button">{tag}</button></li>
        })}
      </ul>
    )
  }

  function TagRoast() {
    const tagRoast = Array.from(new Set(detailData.roast ?? []))

    return (
      <ul style={{ "display": "flex", "flexWrap": "wrap"}}>
        {
        tagRoast.map((tag) => {
          return <li key={tag}><button className="tagButton beanRoast" type="button">{tag}</button></li>
        })}
      </ul>
    )
  }

  function CardList() {

    return (
      <section className="cardList">
        {
        beanData.map((bean, index) => {
          const { id: beanId, name: beanName, roast: beanRoast, origin: beanOrigin, flavorNotes } = bean
          // const beanId = bean.id
          // const beanName = bean.name
          // const beanRoast = bean.roast
          // const beanOrigin = bean.origin

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

