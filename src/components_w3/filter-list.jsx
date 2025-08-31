import { TagFlavors, TagRoast } from "./tag";

// @ts-ignore
export default function FilterList({ selectedFlavor, onToggleFlavor, selectedRoast, onToggleRoast, onClear}) {
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