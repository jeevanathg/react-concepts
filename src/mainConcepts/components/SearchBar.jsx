import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
    console.log("handleFilterTextChange:::::::::::::::::", event.target.value);
  }
  handleInStockOnlyChange(event) {
    this.props.onInStockOnlyChange(event.target.checked);
    console.log(
      "handleInStockOnlyChange:::::::::::::::::",
      event.target.checked
    );
  }
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockOnlyChange}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
