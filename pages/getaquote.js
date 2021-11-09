import Head from "next/head";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from 'next/router'
import Router from "next/router";
const AMOUNT = gql`
  mutation Amount($address: String, $Purchaseprice: Int, $LoanAmount: Int) {
    enterAmount(
      address: $address
      Purchaseprice: $Purchaseprice
      LoanAmount: $LoanAmount
      
    ) {
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


  const router = useRouter()
  const onSubmit = (e) => {
    //e.preventDefault();
    //const dummyAmount=parseInt(purchase)+parseInt(loan);
    enterAmount({
      variables: {
        address: adress,
        Purchaseprice: parseInt(purchase, 10),
        LoanAmount: parseInt(loan, 10),
        
      },
    })
    e.preventDefault();
    router.push("./dummy")

    sessionStorage.setItem('address', adress);
    sessionStorage.setItem('Purchaseprice', parseInt(purchase, 10));
    sessionStorage.setItem('LoanAmount', parseInt(loan, 10));
    
        //router.reload("./dummy")
        // router.replace("./dummy")
    
        //.then(() => {
        //   // history.go(-1);
        //   e.preventDefault();
        //   router.push('/dummy');
        // });


  };
  return (
    <>
      <Head>
        <title>Title Genius | Get A Quote</title>
        <meta name="keywords" content="title-genius" />
      </Head>
      <div className="getQuote">
        <form onSubmit={onSubmit}>
          <input
            onChange={(e) => setAdress(e.target.value)}
            placeholder="Address"
          />
          <br />
          <input
            placeholder="Purchase Price"
            onChange={(e) => setPurchase(e.target.value)}
          />
          <br />
          <input
            placeholder="Loan Amount"
            onChange={(e) => setLoan(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default getAQuote;
