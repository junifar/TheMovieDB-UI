import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

function TableListMovieTopRating(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}  size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Original Title</TableCell>
            <TableCell>Popularity</TableCell>
            <TableCell>Vote Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.results.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.original_title}</TableCell>
              <TableCell>{row.popularity}</TableCell>
              <TableCell>{row.vote_average}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableListMovieTopRating;
