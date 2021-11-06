import Head from "next/head";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
const AMOUNT = gql`
mutation Amount($address:String,$Purchaseprice:Int,$LoanAmount:Int){
  enterAmount(address:$address, Purchaseprice: $Purchaseprice, LoanAmount:$LoanAmount){
    address
    Purchaseprice
    LoanAmount
  }

  }
  `;
const getAQuote = () => {

  const [adress, setAdress] = useState("");
  const [purchase, setPurchase] = useState("");
  const [loan, setLoan] = useState("");


  const [enterAmount] = useMutation(AMOUNT);

  const onSubmit = (e) => {
    e.preventDefault();
    enterAmount({ variables: { address: adress, Purchaseprice: parseInt(purchase,10),LoanAmount:parseInt(loan,10)  } })
  }
  
  return (
    <>
      <Head>
        <title>Title Genius | Get A Quote</title>
        <meta name="keywords" content="title-genius" />
      </Head>

      <form onSubmit={onSubmit}>
        <input onChange={(e) => setAdress(e.target.value)} placeholder="address" /><br />
        <input placeholder="purchaseAmount" onChange={(e) => setPurchase(e.target.value)} />
        <input placeholder="loanAmount" onChange={(e) => setLoan(e.target.value)} /><br />
        <button type="submit">Submit</button>
      </form>

    </>
  );
}

export default getAQuote;