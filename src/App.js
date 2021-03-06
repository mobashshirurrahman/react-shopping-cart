import React from "react";
// import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
// import firebase from 'firebase/app';
import firebase from "firebase/compat/app";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    // this.testing();
  }
  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id
    //       return data;
    //     });
    //     this.setState({
    //       products,
    //       loading:false
    //     })
    //   });
    firebase
      .firestore()
      .collection("products")
      .orderBy("price")
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data(); 
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products,
          loading: false,
        });
      });
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products: products,
    // });
    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty+=1
    })
    .then(()=>{
      console.log("Updated successfully")
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // if (products[index].qty > 0) {
    //   products[index].qty -= 1;
    // }
    // this.setState({
    //   products,
    // });
    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    if (products[index].qty>=1){
      docRef.update({
        qty: products[index].qty-=1
      })
      .then(()=>{
        console.log("Updated successfully")
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    else{
      alert("No item left")
    }
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });
    // return "";
    const docRef = firebase.firestore().collection('products').doc(id);
    docRef.delete().then(()=>{
      console.log("Deleted Successfully")
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;

    products.map((product) => {
      total = total + product.qty * product.price;
    });

    return total;
  };
  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProducts={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={{ padding: 10, fontSize: 22 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}
export default App;
