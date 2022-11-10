import React, { useState, useEffect } from 'react';
import { register } from 'bazar';
import Navbar from './cartNav';
import Cart from './cart';
import Shop from './shopWall';

const { Component } = React;

// Empty bazar store is initialized on first import.
// const { register, poke } = bazar;
const colors = [
    { name: "Yellow", hex: "#FDFF8D", text: "black", price: 100 },
    { name: "Wine", hex: "#4D1310", text: "white", price: 200 },
    { name: "Basil", hex: "#356132", text: "white", price: 300 }
  ];
  
class ecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colors.map(e => ({
        ...e,
        quantity: 0
      }))
    };

    register({
      id: "App",
      sync: () => this.state,
      onPoke: arg => {
        const { name, type } = arg;
        console.log('poked', name);
        const { colors } = this.state;
        this.setState({
          colors: colors.map(e => {
            const { quantity } = e;
            return e.name === name
              ? {
                  ...e,
                  quantity: (() => {
                    if (type === "increment") return quantity + 1;
                    else if (type === "remove") return 0;
                    return quantity - 1;
                  })()
                }
              : e;
          })
        });
      }
    });

    this.changeView = this.changeView.bind(this);
  }

  changeView = where => this.setState({ view: where });

  render() {
    const { view = "shop", colors } = this.state;

    const quantity = colors.map(e => e.quantity).reduce((a, b) => a + b);

    const inCart = colors.filter(e => e.quantity > 0);

    return (
      <div className="App">
        <Navbar changeView={this.changeView} quantity={quantity} />
        {/* {view === "shop" ? <Shop colors={colors} /> : <Cart items={inCart} />} */}
      </div>
    );
  }
}

export default ecart;