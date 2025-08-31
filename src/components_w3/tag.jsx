import detailData from "./datas.json"

// @ts-ignore
export function TagFlavors({ selected, onToggle }) {
  const tagFlavors = Array.from(new Set(detailData.flavorNotes ?? []))

  return (
    <ul className="filterTagList">
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

// @ts-ignore
export function TagRoast({ selected, onToggle }) {
const tagRoast = Array.from(new Set(detailData.roast ?? []))

return (
  <ul className="filterTagList">
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
