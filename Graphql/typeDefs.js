import {gql} from "apollo-server-micro";
export const typeDefs = gql`
type User {
    id:ID
    email:String!
    password:String!

}
type Amount{
    id:ID
    address: String
  Purchaseprice:Int
  LoanAmount:Int
}
type Query{
    currentUser:User!
}
type Mutation{
    register(email:String!,password:String!):User
    login(email:String!,password:String!):LoginResponse!
    enterAmount(address:String,Purchaseprice:Int,LoanAmount:Int):Amount

}
type LoginResponse{
token:String
user:User!
message:String
}
`;