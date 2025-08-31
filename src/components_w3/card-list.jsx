import CardFlavorTags from "./card-flavor-tags"

// @ts-ignore
export default function CardList({ beans = [] }) {
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