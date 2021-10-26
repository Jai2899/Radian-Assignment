const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const { ApolloServer, gql } = require('apollo-server');
const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient()
const typeDefs=gql`
type Users{
    id:String
    email:String
    password:String
}
type Query{
    users:[Users]!
}
type Mutation{
    users(email:String,password:String):Users
}
`;
const resolvers={
    Query:{
        users:()=>{
            return prisma.users.findMany();
        }

    },
    Mutation:{
        users:async(_,{email,password})=>{
            const hashPassword= await bcrypt.hash(password,10)
          const user= await prisma.users.create({data:{email,password:JSON.stringify(hashPassword)}})
          return user;
        }
    }

}


const server=new ApolloServer({typeDefs,resolvers});
server.listen(4444,()=>{
    console.log("Server runs at Port:4444")
})