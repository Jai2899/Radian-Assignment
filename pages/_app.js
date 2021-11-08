import Layout from '../comps/Layout'
import '../styles/globals.css';
//import { InMemoryCache,IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { ApolloClient,  ApolloProvider,InMemoryCache } from "@apollo/client";
// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData: {
//     __schema: {
//       types: [
//         {
//           "kind": "UNION",
//           "name": "AdsReturn",
//           "possibleTypes": [
//             {
//               "name": "Ads"
//             },
//             {
//               "name": "Error"
//             }
//           ]
//         },
//       ],
//     },
//   }
// });
const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});



function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>

  )
}

export default MyApp
