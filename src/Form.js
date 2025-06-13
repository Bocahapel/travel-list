import { useState } from "react";
/* 1. create default Form function with placeholder
    
function Form() {
  return (
    <form className="add-form">
      <h3>What do you want to buy?</h3>
    </form>
  );
}
*/
export default function Form({ onAddItems }) {
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
