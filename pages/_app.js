import Layout from '../comps/Layout'
import '../styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
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
