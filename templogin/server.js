const typeDefs=require("./typeDefs");
const resolvers=require("./resolvers");
const { ApolloServer, gql } = require('apollo-server');
// const {PrismaClient}=require("@prisma/client")
// const prisma=new PrismaClient();
const SECREAT="hfdjgfkhghfdrurkhgfjfdu";
const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        SECREAT
    }
        
   
});
server.listen(4444,()=>{
    console.log("Server runs at Port:4444")
})