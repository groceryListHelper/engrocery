import React from "react";
import GroceryList from "./GroceryList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>engrocery</h1>
        </div>
        <div className="grocery-list">
          <GroceryList />
        </div>
      </div>
    );
  }
}

export default App;
