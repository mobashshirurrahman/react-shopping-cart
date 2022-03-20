import React from "react";
// import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: "https://cdn-icons.flaticon.com/png/512/3109/premium/3109881.png?token=exp=1647758438~hmac=4d17ef80e638ed222ee8fbd6846f1aa3",
          id: 1,
        },
        {
          price: 4999,
          title: "Phone",
          qty: 1,
          img: "https://cdn-icons.flaticon.com/png/512/3137/premium/3137807.png?token=exp=1647758498~hmac=d82dbaa316b1f6626f5b1cd35466e27f",
          id: 2,
        },
        {
          price: 59999,
          title: "Laptop",
          qty: 1,
          img: "https://cdn-icons.flaticon.com/png/512/2888/premium/2888701.png?token=exp=1647758470~hmac=e677bd4d37c45a0b91bf69adbcadf2d3",
          id: 3,
        },
      ],
    };
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
    }
    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () =>{
    const { products } = this.state;
    let total = 0;

    products.map((product) => {
      total = total + product.qty * product.price;
    })

    return total;
  }
  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProducts={this.handleDeleteProduct}
          
        />
        <div style={{padding: 10, fontSize: 22}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
