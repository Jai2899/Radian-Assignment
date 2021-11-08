const desk = () => {
  const json1 = [
    {
      __typename: "Amount",
      id: "6187de47a5e8374a6fa6eab1",
      address: "america",
      Purchaseprice: 3000,
      QuoteDate: "7/11/2021",
      rebate: 18,
      LoanAmount: 2000,
    },
  ];
  console.log(json1);
  const stockData = [
    {
      company: "Twitter Inc",
      ticker: "TWTR",
      stockPrice: "22.76 USD",
      timeElapsed: "5 sec ago",
    },
    {
      company: "Square Inc",
      ticker: "SQ",
      stockPrice: "45.28 USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Shopify Inc",
      ticker: "SHOP",
      stockPrice: "341.79 USD",
      timeElapsed: "3 sec ago",
    },
    {
      company: "Sunrun Inc",
      ticker: "RUN",
      stockPrice: "9.87 USD",
      timeElapsed: "4 sec ago",
    },
    {
      company: "Adobe Inc",
      ticker: "ADBE",
      stockPrice: "300.99 USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "HubSpot Inc",
      ticker: "HUBS",
      stockPrice: "115.22 USD",
      timeElapsed: "12 sec ago",
    },
  ];
  console.log(stockData);

  return (
    <>
        {json1.map((data, key) => {
          return (
            <div key={key}>

                      <h5>{data.address}</h5>

                      <h5>{data.Purchaseprice}</h5>

            </div>
          );
        })}
    </>
  );
};

export default desk;
