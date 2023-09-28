import {Dropdown} from './Dropdown'
import './App.css';

function App() {
  // Sample list of items in the dropdown, this can be modified
  const items = ['Burger', 'Hot Dog', 'Fried Chicken Sandwich', 'Pear', 'Apple', 'Ice Cream', 'Chocolate Milk', 'Pasta', 'Meatloaf', 'Caesar Salad', 'Lemonade']
  return (
    <div className="App">
      {/* Dropdown component imported here */}
      <Dropdown items={items}/>
    </div>
  );
}

export default App;
