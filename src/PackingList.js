import { useState } from "react";
import { Item } from "./Item";

/* 1. create default packinglist function

the onDeleteItems is from APP then we need to passing this to ITEM function inside PACKINGLIST
 */
export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  //derived state to control the sorting selection
  let sortedItems;

  //sorted by input control
  if (sortBy === "input") sortedItems = items;

  //sorted by description A-Z control
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  //sorted by packed status control
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {/*breakdown the array object into item, the {item} is prop that passed into Item component*/}
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Pack Status</option>
        </select>
        <button onClick={onClearItems}>Clear All</button>
      </div>
    </div>
  );
}
