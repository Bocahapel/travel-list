import { useState } from "react";

const initialItems = [
  { id: 1, description: "Vegetable", quantity: 1, packed: false },
  { id: 2, description: "Egg", quantity: 1, packed: false },
  { id: 3, description: "Meat", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddNewItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      all the app
      <Logo />
      <Form onAddItems={handleAddNewItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Easy List</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>input, selection box etc</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X item on your list, and you already carted X (%X)</em>
    </footer>
  );
}
