const _ = require("lodash");
const Cart = require("./DemoData");

const resolvers = {
  Query: {
    cart: (parent, args) => {
      const cart = Cart.carts.find((cart) => cart.id === Number(args.id));
      return cart;
    },
  },

  Mutation: {
    addItem: (parent, args) => {
      // add item to cart
      const { cartId, id, name, price, quantity } = args.input;

      var cart = Cart.carts.find((cart) => cart.id === Number(cartId));

      //   if cart exist
      if (cart) {
        const newItem = {
          id,
          name,
          price,
          quantity,
        };

        cart.items.push(newItem);
      }
      //   if not
      else {
        cart = {
          id: Number(cartId),
          items: [],
        };
        const newItem = {
          id,
          name,
          price,
          quantity,
        };
        cart.items.push(newItem);

        Cart.carts.push(cart);
      }

      return cart;
    },
  },
};
module.exports = { resolvers };
