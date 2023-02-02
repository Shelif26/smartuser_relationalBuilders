import express from "express";
import { DBConnection } from "./resource/DataSource";
import { resolvers } from "./graphql/resolver";
import { typeDefs } from "./graphql/typeDef";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server-express";

const app = express();

let apolloServer: any;

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

async function startServer() {
  apolloServer = new ApolloServer({
    schema: schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

DBConnection.initialize()
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server connected at localhost :: 3000");
});
