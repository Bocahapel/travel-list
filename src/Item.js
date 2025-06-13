/* 1. create Item component with passed props
   2. the {item} must have the same name with item from <Item item={item}/>
 */

export function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      {/*creating checkbox input*/}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      {/*create an if logic to line through the listed item if already packed*/}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {/*props.what based on the object*/}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
