const initialItems = [
  { id: 1, description: "Vegetable", quantity: 1, packed: false },
  { id: 2, description: "Egg", quantity: 1, packed: false },
  { id: 3, description: "Meat", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      all the app
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Easy List</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>input, selection box etc</h3>
      <input type="text" placeholder="Item..." />
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        <li>
          {initialItems.map((item) => (
            <Item item={item} />
          ))}
        </li>
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
