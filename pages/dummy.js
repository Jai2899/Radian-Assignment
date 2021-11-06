import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Table, TableCell, TableBody, TableHead, TableRow, TableFooter } from '@mui/material'
import React from 'react';
import Paper from '@mui/material/Paper';







function Quote() {
 

  return (
    <>
    <Grid >
      <Grid style={{ flexBasis: "100%", padding: "8px" }}>
        <Box className="jss80">
          <Box className="jss72">
            <Box>
              <Box style={{ lineHeight: "unset" }} >
                1025 5th Avenue Coraopolis, PA 15108
              </Box>
            </Box>
          </Box>
          <Box className="jss84">
            <Button className="jss85">
              Share
            </Button>
            <Button className="jss85">
              Save
            </Button>
            <Button className="jss85">
              Questions?
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid className="grid">
        <>
          <Box className="jss93">
            <Paper elevation={2} className="jss94">
              <Box className="jss76">
                <Box className="jss96">
                  <span>Due Upon Closing</span>
                </Box>
              </Box>
              <>
                <Box className="jss99">
                  <Box className="jss102">
                    <Typography className="jss66">
                      Radian Quote
                    </Typography>
                    <Box >
                      <Typography className="style">
                        <Box className="jss104">
                          186.60
                        </Box>
                      </Typography>

                    </Box>
                  </Box>
                </Box>
              </>
              <>
                <Box className="jss105">
                  <Box className="jss106">
                    <Typography className="jss66">
                      Buyer responsibility
                    </Typography>
                    <Box className="jss108">
                      <Typography className="style">
                        <Box className="jss109">
                          786.80
                        </Box>
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="jss106">
                    <Typography className="jss66">
                      Buyer responsibility
                    </Typography>
                    <Box className="jss108">
                      <Typography className="style">
                        <Box className="jss109">
                          786.80
                        </Box>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </>
              <>
                <Box className="jss114">
                  <Button className="button">
                    Lets Get Started
                  </Button>
                </Box>
              </>
            </Paper>
          </Box>
        </>
        <>
          <Box className="jss115">
            <Box className="jss78 jss388">
              <Box className="jss390">
                <img src="data:image/png;base64,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" alt="" style={{ width: "100%", height: "160px" }} />
              </Box>
            </Box>
            <Box className="jss391">
              <Box className="jss392">
                <>
                  <Box className="jss393">
                    <Box className="jss394">
                      <Typography className="jss79">
                        40,4000
                      </Typography>
                    </Box>
                    <Box className="jss395" style={{ width: "calc(100% - 112px)" }}>
                      <Typography className="jss79">
                        Purchase Price
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="jss393">
                    <Box className="jss394">
                      <Typography className="jss79">
                        40,4000
                      </Typography>
                    </Box>
                    <Box className="jss395" style={{ width: "calc(100% - 112px)" }}>
                      <Typography className="jss79">
                        Loan Amount
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="jss393">
                    <Box className="jss394">
                      <Typography className="jss79">
                        10/28/2021
                      </Typography>
                    </Box>
                    <Box className="jss395" style={{ width: "calc(100% - 112px)" }}>
                      <Typography className="jss79">
                        Quote Date
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="jss393">
                    <Box className="jss394">
                      <Typography className="jss79">
                        Buy
                      </Typography>
                    </Box>
                    <Box className="jss395" style={{ width: "calc(100% - 112px)" }}>
                      <Typography className="jss79">
                        Transaction
                      </Typography>
                    </Box>
                  </Box>
                </>
              </Box>
            </Box>
          </Box>
        </>
      </Grid>
      </Grid>
      <div>
        <Paper elevation={6} style={{ borderRadius: "30px", width: "auto", height: "auto", margin: "40px 50px 40px 50px" }}>
          <Box padding="16px">
            <h2 style={{ color: "rgb(0 166 160)" }}>Title Charges </h2>
            <Table style={{ width: "100%" }} aria-label="a dense table" >

              <TableHead>

                <TableRow >


                  <TableCell style={{ fontWeight: "bold", paddingRight: "125px" }}>Premium</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Buyer</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Seller</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>Total charges</TableCell>


                </TableRow>


              </TableHead>


              <TableBody>
                <h6>Owner's Title Insurance</h6>
                <TableCell>200</TableCell>
                <TableCell>300</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>100</TableCell>
              </TableBody>
              <TableBody>
                <h6>Lender's Title Insurance</h6>
                <TableCell>200</TableCell>
                <TableCell >300</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>100</TableCell>
              </TableBody>
              <TableBody>
                <TableCell variant="footer" style={{ color: "darkblue", borderBottom: "none", fontWeight: "bold" }}>Total Premium</TableCell>
                <TableCell style={{ borderBottom: "none", fontWeight: "bold" }} >200</TableCell>
                <TableCell style={{ borderBottom: "none", fontWeight: "bold" }} >300</TableCell>
                <TableCell style={{ borderBottom: "none", fontWeight: "bold", color: "rgb(0 166 160)" }} >100</TableCell>
              </TableBody>
            </Table>

            <Table style={{ width: "100%" }}>
              <TableHead >
                <TableRow >

                  <TableCell style={{ borderBottom: "none", fontWeight: "bold", paddingRight: "80px" }} >Endorsements</TableCell>
                  <TableCell style={{ borderBottom: "none", fontWeight: "bold" }} >Buyer</TableCell>
                  <TableCell style={{ borderBottom: "none", fontWeight: "bold" }} >Seller</TableCell>
                  <TableCell style={{ borderBottom: "none", fontWeight: "bold", color: "rgb(0 166 160)" }}>TotalChages</TableCell>


                </TableRow>
              </TableHead>
              <TableBody>
                <h6>PA 100 (Alta 9)</h6>
                <TableCell>50</TableCell>
                <TableCell>50</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>50</TableCell>

              </TableBody>
              <TableBody>
                <h6>PA 300</h6>
                <TableCell>50</TableCell>
                <TableCell>50</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>50</TableCell>

              </TableBody>
              <TableBody>
                <h6>PA 900 (ALTA 8.1)</h6>

                <TableCell>50</TableCell>
                <TableCell>50</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>50</TableCell>

              </TableBody>
              <TableBody>
                <TableCell style={{ borderBottom: "none", fontWeight: "bold" }}>Total Endorsements</TableCell>
                <TableCell style={{ borderBottom: "none", fontWeight: "bold" }}>50</TableCell>
                <TableCell style={{ borderBottom: "none", fontWeight: "bold" }}>50</TableCell>
                <TableCell style={{ borderBottom: "none", fontWeight: "bold", color: "rgb(0 166 160)" }}>50</TableCell>

              </TableBody>
            </Table>


            <h3 style={{ color: "rgb(0 166 160)" }}>Settlement Charges</h3>
            <Table style={{ width: "100%" }} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell ></TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Buyer</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Seller</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>Total Charges</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <h6> Notary Fee</h6>
                <TableCell >49</TableCell>
                <TableCell>56</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>34</TableCell>
              </TableBody>
              <TableBody>
                <h6> Municipal Lien Search</h6>
                <TableCell>49</TableCell>
                <TableCell>56</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>34</TableCell>
              </TableBody>
              <TableBody>
                <h6> Closing Protection Letter</h6>
                <TableCell>49</TableCell>
                <TableCell>56</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>34</TableCell>
              </TableBody>
              <TableBody>
                <h6> Deed Preparation</h6>
                <TableCell>49</TableCell>
                <TableCell>56</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>34</TableCell>
              </TableBody>
              <TableBody>
                <h6> Tax Certification</h6>
                <TableCell>49</TableCell>
                <TableCell>56</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>34</TableCell>
              </TableBody>
              <TableBody>
                <h6> Closing Fee</h6>
                <TableCell>49</TableCell>
                <TableCell>56</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>34</TableCell>
              </TableBody>
              <TableBody>
                <TableCell style={{ fontWeight: "bold", fontSize: "h1" }}>Total Settlement Charges </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>49</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>56</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>34</TableCell>
              </TableBody>
              <TableBody style={{ color: "blue", backgroundColor: "lightblue", borderRadius: "5px" }}>
                <h6>Total Title Charges</h6>
                <TableCell>200</TableCell>
                <TableCell >200</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>400</TableCell>
              </TableBody>
            </Table>

          </Box>
        </Paper>

      </div>
      <div>
        <Paper elevation={6} style={{ borderRadius: "30px", height: "500px", margin: "40px 50px 40px 50px" }}>



          <Grid container spacing={0} lg={12} style={{ padding: "16px", height: "250px" }}>
            <Grid item xs={12} style={{ height: "40px" }}>
              <Box>
                <Typography variant="h6" style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>Taxes & Other Government Fees</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} style={{ height: "210px" }}>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ paddingRight: "50px" }} >       </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>Buyer</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>Seller</TableCell>
                    <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>TotalCharges</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <h6>Deed State Tax</h6>
                  <TableCell>200</TableCell>
                  <TableCell >200</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>400</TableCell>
                </TableBody>
                <TableBody>
                  <h6>Deed County Tax</h6>
                  <TableCell>200</TableCell>
                  <TableCell >200</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>400</TableCell>
                </TableBody>
                <TableBody>
                  <h6>Mortgage Recording Fee</h6>
                  <TableCell>200</TableCell>
                  <TableCell >200</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>400</TableCell>
                </TableBody>
                <TableBody>
                  <h6>Deed Recording Fee</h6>
                  <TableCell>200</TableCell>
                  <TableCell >200</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>400</TableCell>
                </TableBody>
                <TableBody>
                  <h4>Total Taxes & Other Government Fees</h4>
                  <TableCell style={{ fontWeight: "bold" }}>200</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>200</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>400</TableCell>
                </TableBody>
                <TableBody style={{ color: "blue", backgroundColor: "lightblue", borderRadius: "5px" }}>
                  <h4>Total Taxes & Other Government Fees</h4>
                  <TableCell>200</TableCell>
                  <TableCell >200</TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "rgb(0 166 160)" }}>400</TableCell>
                </TableBody>

              </Table>
            </Grid>
          </Grid>






        </Paper>

      </div>

    </>

  )
}

export default Quote










