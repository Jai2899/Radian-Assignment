import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../Graphql/typeDefs";
import { resolvers } from "../../Graphql/resolvers";
import Cors from "micro-cors";
const cors = Cors();
const SECREAT = "hfdjgfkhghfdrurkhgfjfdu";
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        SECREAT
    }
})
const startServer=apolloServer.start();
export default cors(async function handler(req,res){
    if(req.method==='OPTIONS'){
        res.send();
        return false;
    }
    await startServer;
    await apolloServer.createHandler({
        path:"/api/graphql",
    })(req,res);
})
export const config={
    api:{
        bodyParser:false,
    },
};