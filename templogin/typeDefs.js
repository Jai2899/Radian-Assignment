const {gql}=require("apollo-server") ;
 const typeDefs=gql`
type User {
    id:ID
    email:String!
    password:String!

}
type Query{
    currentUser:User!
}
type Mutation{
    register(email:String!,password:String!):User
    login(email:String!,password:String!):LoginResponse!

}
type LoginResponse{
token:String
user:User!
message:String
}
`;
module.exports=typeDefs;
    