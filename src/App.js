import { useState } from "react";

const initialItems = [
  { id: 1, description: "Vegetable", quantity: 1, packed: false },
  { id: 2, description: "Egg", quantity: 1, packed: false },
  { id: 3, description: "Meat", quantity: 1, packed: false },
];

/*export default function App() {
  const [items, setItems] = useState([]);

  function handleAddNewItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      all the app
      <Logo />
      <Form onAddItems={handleAddNewItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItems}
      />
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

function PackingList({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
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
*/

/*1. Create the default App function and <something /> inside it
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}*/
export default function App() {
  //uplifting the items state to the common parent of form and packing list function
  const [items, setItems] = useState([]);

  //this function will create and merge the new input with the existing items array
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItem} />
      <Stats />
    </div>
  );
}

/*This is a logo function
 */
function Logo() {
  return <h1>Item List Note</h1>;
}

/* 1. create default Form function with placeholder
    
function Form() {
  return (
    <form className="add-form">
      <h3>What do you want to buy?</h3>
    </form>
  );
}
*/
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  /*this is an event handler*/
  function handleSubmit(event) {
    //this will stop the 1 page app reloading everytime user submit something
    event.preventDefault();

    //if no new item input, i won't save anything
    if (!description) return;

    //save the new input into newItem
    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want to buy?</h3>

      {/* 1. Select is a selection dropdown
          2. breakdown using array methon so user can adjust the selection length
      */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/*Array.from({ length: 20 }, (_, i) => i + 1) is creating an array of number 1-20
            
            .map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
            ^for each number, return <option>num</option> that:
             - value={num} Sets the value of the option (used internally when an option is selected).
             - key={num} A unique identifier React uses to keep track of elements efficiently during re-rendering.
        */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/*Input is a textbox that user can type something*/}
      <input
        type="text"
        placeholder="Item..."
        //the input will be saved and showed on page
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/*Button just a button*/}
      <button>Add</button>
    </form>
  );
}

/* 1. create default packinglist function

the onDeleteItems is from APP then we need to passing this to ITEM function inside PACKINGLIST
 */
function PackingList({ items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {/*breakdown the array object into item, the {item} is prop that passed into Item component*/}
        {items.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

/* 1. create Item component with passed props
   2. the {item} must have the same name with item from <Item item={item}/>
 */
function Item({ item, onDeleteItems }) {
  return (
    <li>
      {/*create an if logic to line through the listed item if already packed*/}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {/*props.what based on the object*/}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

/*1. create defaul footer with placeholder
 */
function Stats() {
  return (
    <footer className="stats">
      <em>
        You have X item(s) on the list, and you have already packed X (X%)
      </em>
    </footer>
  );
}
