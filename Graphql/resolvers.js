const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
//import _ from 'lodash';


const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();



export const resolvers = {
    Query: {
        charges: () => {
            return prisma.amount.findMany();
        },
        charge:(_parent,{id})=>{
          return prisma.amount.findUnique({where:{id}})
        }

    },
    Mutation: {
        register: async (_, { email, password }) => {
            const existinguser = await prisma.users.findUnique({ where: { email } })
            if (existinguser) {
                throw new Error("User alreay Exists");
            } else {
                const hashPassword = await bcrypt.hash(password, 10)
                const user = await prisma.users.create({ data: { email, password: hashPassword } })
                return user;
            }
        },
        login: async (_, { email, password }, { SECREAT }) => {
            const user = await prisma.users.findUnique({ where: { email } })
            if (!user) {
                throw new Error("Not user with that email");
            }
            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                throw new Error("Password Incorrect");

            }
            const token = jwt.sign({
                id: user.id,
                email: user.email
                // user:_.pick(user,["id","email"])

            }, SECREAT, { expiresIn: "1d" })
            return ({ token, message: "loginsuccessfully" });

        },
        enterAmount: (_parent, { address, Purchaseprice, LoanAmount }) => {


            const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

            const QuoteDate = new Date().toLocaleDateString();
            const rebate = random(15, 20);
            const originalTitleQuote = Math.ceil(Purchaseprice / 126);
            const rebateSavings = Math.ceil((originalTitleQuote / 100) * rebate);
            const radianQuote = _.round(originalTitleQuote - rebateSavings);
            const BuyerResponsibility = _.round(radianQuote * 0.9);
            const sellerResponsibility = _.round(radianQuote - BuyerResponsibility);
            //-----------------------------------Seller-------------------------------//
            //------------------------Title Charges--------------------------//
            //-----------Seller Premium----------//
            const SOTI = 0;
            const SLTI = 0;
            const SBR = 0;
            const STPremium = SOTI + SLTI + SBR;
            //-----------Endorsements------------//
            const SAE906 = 0;
            const SAE8106 = 0;
            const STEndorsements = SAE906 + SAE8106;
            //---------------------Settlement Charges---------------------//
            const SCF = sellerResponsibility;
            const SSF = 0;
            const STSettlementCharges = SCF + SSF;
            //---------------------------------------------------------------//
            const STitleCharges = STPremium + STEndorsements + STSettlementCharges;
            //------------------------------------------------------------------------//

            //-----------------------------------Buyer-------------------------------//
            //---------------------Settlement Charges---------------------//
            const BCF = _.round(sellerResponsibility, 2);
            const BSF = _.round(Math.floor(BuyerResponsibility * 0.1));
            const BTSettlementCharges = _.round(BCF + BSF);
            //------------------------Title Charges--------------------------//
            //-----------Endorsements------------//
            const BAE906 = _.round(Math.floor(BuyerResponsibility * 0.09));
            const BAE8106 = _.round(Math.floor(BuyerResponsibility * 0.01));
            const BTEndorsements = _.round(BAE906 + BAE8106);
            //-----------Seller Premium----------//
            const BLTI = _.round(BAE8106);
            const BBR = _.round(rebateSavings);
            const BOTI = _.round(BuyerResponsibility + BBR - BLTI - BTEndorsements - BTSettlementCharges);
            const BTPremium = _.round(BOTI + BLTI - BBR);
            //---------------------------------------------------------------//
            const BTitleCharges = _.round(BTPremium + BTEndorsements + BTSettlementCharges);
            //------------------------------------------------------------------------//

            //------------------------------------Total----------------------------------//
            //------------------------Title Charges--------------------------//
            //-----------Total Premium----------//
            const TOTI = SOTI + BOTI;
            const TLTI = SLTI + BLTI;
            const TBR = SBR + BBR;
            const TTPremium = STPremium + BTPremium;
            //-----------Endorsements------------//
            const TAE906 = SAE906 + BAE906;
            const TAE8106 = SAE8106 + BAE906;
            const TTEndorsements = STEndorsements + BTEndorsements;
            //---------------------Settlement Charges---------------------//
            const TCF = SCF + BCF;
            const TSF = SSF + BSF;
            const TTSettlementCharges = STSettlementCharges + BTSettlementCharges;
            //---------------------------------------------------------------//
            const TTitleCharges = STitleCharges + BTitleCharges;
            //Taxes & Other Government Fees
            //-------------------------------------Buyer---------------------------------------------//
            const BDST = 0;
            const BMST = (Purchaseprice - LoanAmount) * 0.0105;
            const BMIT = (Purchaseprice - LoanAmount) * 0.006;;
            const BMRF = BAE906;
            const BDRF = BLTI;
            const BTTOGF = BDST + BMST + BMIT + BMRF + BDRF;
            //-------------------------------------Seller---------------------------------------------//
            const SDST = BuyerResponsibility - 100;
            const SMST = 0;
            const SMIT = 0;
            const SMRF = 0;
            const SDRF = 0;
            const STTOGF = SDST + SMST + SMIT + SMRF + SDRF;
            //-------------------------------------Total---------------------------------------------//
            const TDST = BDST + SDST;
            const TMST = BMST + SMST;
            const TMIT = BMIT + SMIT;
            const TMRF = BMRF + SMRF;
            const TDRF = BDRF + SDRF;
            const TTTOGF = BTTOGF + STTOGF;

            const Amount = prisma.amount.create({
                data: {
                    address, Purchaseprice, LoanAmount,
                    QuoteDate,
                    rebate,
                    originalTitleQuote,
                    rebateSavings,
                    radianQuote,
                    BuyerResponsibility,
                    sellerResponsibility,
                    SOTI,
                    SLTI,
                    SBR,
                    STPremium,
                    SAE906,
                    SAE8106,
                    STEndorsements,
                    SCF,
                    SSF,
                    STSettlementCharges,
                    STitleCharges,
                    BCF,
                    BSF,
                    BTSettlementCharges,
                    BAE906,
                    BAE8106,
                    BTEndorsements,
                    BLTI,
                    BBR,
                    BOTI,
                    BTPremium,
                    BTitleCharges,
                    TOTI,
                    TLTI,
                    TBR,
                    TTPremium,
                    TAE906,
                    TAE8106,
                    TTEndorsements,
                    TCF,
                    TSF,
                    TTSettlementCharges,
                    TTitleCharges,
                    BDST,
                    BMST,
                    BMIT,
                    BMRF,
                    BDRF,
                    BTTOGF,
                    SDST,
                    SMST,
                    SMIT,
                    SMRF,
                    SDRF,
                    STTOGF,
                    TDST,
                    TMST,
                    TMIT,
                    TMRF,
                    TDRF,
                    TTTOGF,
                }
            })
            return Amount;
        },
        calculationAmount: (_parent, { address, Purchaseprice, LoanAmount }) => {
            const Data = Purchaseprice + LoanAmount;
            const Amount = prisma.amount.create({ data: { address, LoanAmount, Purchaseprice, QuoteDate: Data } })
            return Amount;
        }


    }

}