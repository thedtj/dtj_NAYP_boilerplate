import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { endpoint } from '../config'
// import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from '../components/Cart'

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      })
    },
    // * Local data
    // clientState: {
    //   resolvers: {
    //     Mutation: {
    //       toggleCart(_, variables, { cache }) {
    //         // 1. Read cartOpen value from the cache
    //         const { cartOpen } = cache.readQuery({
    //           query: LOCAL_STATE_QUERY,
    //         })
    //         // Write cart State as opposite (toggle open)
    //         const data = {
    //           data: { cartOpen: !cartOpen },
    //         }
    //         cache.writeData(data)
    //         return data
    //       },
    //     },
    //   },
    //   defaults: {
    //     cartOpen: false,
    //   },
    // },
  })
}

export default withApollo(createClient)
