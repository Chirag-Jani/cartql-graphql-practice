const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const client = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

client
  .listen()
  .then(({ url }) => {
    console.log(`Server running at: ${url}`);
  })
  .catch((error) => {
    console.log(error.message);
  });
