const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const _=require("lodash");
const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient();

const resolvers={
    Query:{

    },
    Mutation:{
        register:async(_,{email,password})=>{
            const hashPassword= await bcrypt.hash(password,10)
          const user= await prisma.users.create({data:{email,password:hashPassword}})
          return user;
        },
        login:async(_,{email,password},{SECREAT})=>{
            const user= await prisma.users.findUnique({where:{email}})
            if(!user){
                throw new Error("Not user with that email");
            }
            const validPassword= await bcrypt.compare(password,user.password)
            if(!validPassword){
                throw new Error("Password Incorrect");

            }
            const token=jwt.sign({
                id:user.id,
                email:user.email
                // user:_.pick(user,["id","email"])

            },SECREAT,{expiresIn:"1d"})
            return ({token,message:"loginsuccessfully"});

        }
     }
    
    }

module.exports=resolvers;