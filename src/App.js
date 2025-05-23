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
    <div className="add-form">
      <h3>input, selection box etc</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">the items</div>;
}

function Stats() {
  return <footer className="stats"></footer>;
}
