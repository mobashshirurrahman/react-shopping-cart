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
              src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1649872391~hmac=c3aca717729764e4fe02d1f5f9f771fb"
              onClick={() => props.onIncreaseQuantity(props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1649872442~hmac=7016ed6fb79a6c2a7b20f98f8cc6f61e"
              onClick={() => props.onDecreaseQuantity(props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"
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
