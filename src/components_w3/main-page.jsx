import { useState } from "react"
import { beanData, CardList, FilterList, Logo, SearchBar } from "."
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
      <SearchBar onSearch={(
        // @ts-ignore
        value) => setQuery(value)} />
      <FilterList
        selectedFlavor={selectedFlavor}
        // @ts-ignore
        onToggleFlavor={(tag) =>
          setSelectedFlavor(prev => (prev === tag ? "" : tag))
        }
        selectedRoast={selectedRoast}
        // @ts-ignore
        onToggleRoast={(tag) =>
          setSelectedRoast(prev => (prev === tag ? "" : tag))
        }
        onClear={clearFilters}
      />
      <CardList
        // @ts-ignore
        beans={filteredBeans} />
    </main>
  )}
