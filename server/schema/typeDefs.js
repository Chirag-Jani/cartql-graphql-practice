const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    cart(id: ID!): Cart
  }

  type Mutation {
    addItem(input: AddToCartInput!): Cart!
  }

  input AddToCartInput {
    cartId: ID!
    id: ID!
    name: String!
    price: Int!
    quantity: Int = 1
  }

  type Cart {
    id: ID!
    items: [CartItem!]!
  }

  type CartItem {
    id: ID!
    name: String!
    price: Int!
    quantity: Int!
  }
`;

module.exports = { typeDefs };
