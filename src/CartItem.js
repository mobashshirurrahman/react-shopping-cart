import React from "react";

const CartItem = (props) => {
//   increaseQuantity = () => {
//     // console.log(this)
//     // setstate form 1
//     // this.setState({
//     //     qty: this.state.qty+1
//     // })

//     // setState form 2 - if previous state req use this form
//     this.setState((prevState) => {
//       return {
//         qty: prevState.qty + 1,
//       };
//     });
//   };
//   decreaseQuantity = () => {
//     if (this.state.qty > 0) {
//       this.setState((prevState) => {
//         return {
//           qty: prevState.qty - 1,
//         };
//       });
//     }
//   };

//   deleteItem = () => {
//     // console.log("delete");
//     alert("delete");
//   };
  // here act as synchronous and no batching of setState happens
  // testing(){
  //     const promise = new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             resolve("done")
  //         },5000);
  //     })
  //     promise.then(() => {
  //         this.setState({qty: this.state.qty +10});
  //         this.setState({qty: this.state.qty +10});
  //         this.setState({qty: this.state.qty +10});
  //         console.log(this.state);
  //     })
  // }
//   render() {
    // console.log("propos",this.props);
    const { price, title, qty,img } = props.product;
    // console.log(this.props);
    // this.setState({qty: 19}) inside resnder if you call set state it will give you stackoverflow erroe
    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={styles.image}
            src={img}
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>{qty}</div>
          <div className="cart-item-actions">
            {/* Button */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040520.png?token=exp=1647526202~hmac=2b5d3dfb258e65c184e19240ffe370f8"
              onClick={() => props.onIncreaseQuantity(props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040522.png?token=exp=1647526156~hmac=4d41521cbd2b31ea01aea500ec709d8b"
              onClick={() => props.onDecreaseQuantity(props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1647526235~hmac=05dcb4e4598986a96048a720a7568753"
              onClick={() => props.onDeleteProducts(props.product.id)}
            />
          </div>
        </div>
        {/* <div>Total: {this.getCartTotal()}</div> */}
      </div>
    );
  }
// }

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "# CCC",
  },
};

export default CartItem;
