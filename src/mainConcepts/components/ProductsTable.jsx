import React from "react";

function ProductsCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  );
}

class ProductsRow extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductsTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      console.log("ProductsTable.filterText:::::::::::::::::", filterText);
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        console.log(
          "product.name.indexOf(filterText):::::::::::::::::",
          product.name
        );
        rows.push(
          <ProductsCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductsRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductsTable;
