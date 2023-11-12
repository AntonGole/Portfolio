import ListGroup from "./components/ListGroup";
import { MouseEvent } from "react";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {}
      <ul className="list-group">
        {items.length == 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
