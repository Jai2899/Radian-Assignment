import { gql } from "apollo-server-micro";
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
  QuoteDate:String
  rebate:Float
  originalTitleQuote:   Float
  rebateSavings:        Float
  radianQuote:          Float
  BuyerResponsibility:  Float
  sellerResponsibility: Float
  SOTI:                 Float
  SLTI:                 Float
  SBR:                  Float
  STPremium:            Float
  SAE906:               Float
  SAE8106:              Float
  STEndorsements:       Float
  SCF:                  Float
  SSF:                  Float
  STSettlementCharges:  Float
  STitleCharges:        Float
  BCF:                  Float
  BSF:                  Float
  BTSettlementCharges:  Float
  BAE906:               Float
  BAE8106:              Float
  BTEndorsements:       Float
  BLTI:                 Float
  BBR:                  Float
  BOTI:                 Float
  BTPremium:            Float
  BTitleCharges:        Float
  TOTI:                 Float
  TLTI:                 Float
  TBR:                  Float
  TTPremium:            Float
  TAE906:               Float
  TAE8106:              Float
  TTEndorsements:       Float
  TCF:                  Float
  TSF:                  Float
  TTSettlementCharges:  Float
  TTitleCharges:        Float
  BDST:                 Float
  BMST:                 Float
  BMIT:                 Float
  BMRF:                 Float
  BDRF:                 Float
  BTTOGF:               Float
  SDST:                 Float
  SMST:                 Float
  SMIT:                 Float
  SMRF:                 Float
  SDRF:                 Float
  STTOGF:               Float
  TDST:                 Float
  TMST:                 Float
  TMIT:                 Float
  TMRF:                 Float
  TDRF:                 Float
  TTTOGF:               Float

}
  
 
type Query{
    charges:[Amount]!
    charge(id:ID):Amount
}
type Mutation{
    register(email:String!,password:String!):User
    login(email:String!,password:String!):LoginResponse!
    enterAmount(address:String,Purchaseprice:Int,LoanAmount:Int):Amount
    calculationAmount(address:String,Purchaseprice:Float,LoanAmount:Float):Amount

}
type LoginResponse{
token:String
user:User!
message:String
}
`;