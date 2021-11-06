import Head from "next/head";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from 'next/router'
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
    e.preventDefault();
    enterAmount({
      variables: {
        address: adress,
        Purchaseprice: parseInt(purchase, 10),
        LoanAmount: parseInt(loan, 10),
      },
    }).then(() => {
      // history.go(-1);
      router.push('/quoteData');
    });
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
