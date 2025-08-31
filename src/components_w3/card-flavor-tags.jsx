// @ts-ignore
export default function CardFlavorTags({flavorNotes = []}) {
  const flavorList = flavorNotes
  if (!Array.isArray(flavorNotes) || flavorNotes.length === 0) return null

  return (
    <ul className="filterTagList cardFilter">
      {
        flavorList.map((tag) => {
        return <li key={tag}><span className="tag tagblock" >{tag}</span></li>
      })
      }
    </ul>
  )
}