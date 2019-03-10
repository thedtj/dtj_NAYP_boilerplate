import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers/index'
import db from './db'

// create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  })
}

module.exports = createServer
