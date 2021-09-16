import React from "react";
import PRODUCTS from "./data/Products";
import SearchBar from "./components/SearchBar";
import ProductsTable from "./components/ProductsTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }
  handleInStockOnlyChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }
  handleInStockOnlyChange;
  render() {
    return (
      <div>
        <hr />
        <h3>12. Thinking in React</h3>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockOnlyChange={this.handleInStockOnlyChange}
        />
        <ProductsTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

function ThinkingInReact(props) {
  return <FilterableProductTable />;
}

export default ThinkingInReact;
