import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
    Paper,
    Pagination,
  Stack,Button
} from "@mui/material";

import React, { useContext } from "react";
import { PageContext } from "../../context/Page";

function TableComponent({ state, header}) {
  console.log(state ? state[0].name : null);
    console.log(header);
     
    let {pageSet}=useContext(PageContext)
    const getnumber = (e,p) => {
       pageSet(p)
    }

    return (
      <div>
    <TableContainer
      sx={{ maxWidth: 1000, marginLeft: "auto", marginRight: "auto"  }}
                component={Paper}
                
    >
      <Table
        sx={{
          minWidth: 150,
          maxWidth: 1000,
          backgroundColor: "rgb(17, 7, 62)",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {header.map((head) => (
              <TableCell align="center" sx={{ color: "white" }}>
                {head.field}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {state
            ? state.map((row) => (
                <TableRow key="" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {header.map((head) => (
                        
                             <TableCell
                                align="center"
                                sx={{ color: "white" }}
                                component="th"
                                scope="row"
                            >
                                {
                                    head?.pic?<img width={40} src={row[head.field]} alt="" srcset="" />: head.button? <Stack spacing={0} direction="column">
                                    <Button variant="contained" color="success" >Buy Now</Button>
                                  </Stack>:row[head.field]
                                }
                            </TableCell> 
                         
                 ))}
                </TableRow>
              ))
            : null}
        </TableBody>
          </Table>
            </TableContainer>
           <Stack  spacing={2}>
            <Pagination sx={{marginLeft:"auto",marginRight:'auto',marginTop:3}}  count={10} onChange={getnumber} color="success" size="large" />
          </Stack>
    </div>
  );
}

export default TableComponent;
