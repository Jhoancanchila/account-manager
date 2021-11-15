import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useGetData } from '../../hooks/useGetData';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const accounts = useGetData()

  return (
    accounts.length > 0 &&
    <TableContainer component={Paper} style={{ margin: '2rem 0 ' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Servicio</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Contraseña</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Observación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accounts.map((account, index) => (
            <TableRow key={account.id}>
              <TableCell component="th" scope="row">
                {account.provider}
              </TableCell>
              <TableCell align="right">{account.email}</TableCell>
              <TableCell align="right">{account.password}</TableCell>
              <TableCell align="right">{account.createDate}</TableCell>
              <TableCell align="right">{account.observations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
