import React from 'react';
import _ from 'lodash';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Score = () => {
    let [dataObjt, setDataObjt] = useState(JSON.parse(localStorage.getItem("Player")));
    const deleteData = (e) => {
        var data = dataObjt;
        var index = data.indexOf(e.target.id);

        data.splice(index, 1);
        localStorage.setItem('Player', JSON.stringify(data));

        setDataObjt(data);
        window.location.reload();
    }


    return (
        <React.Fragment>
            <br />
            <TableContainer component={Paper} sx={{ minWidth: 200, maxWidth: 1000, marginLeft: '10%' }}>
                <Table sx={{ minWidth: 200, maxWidth: 1000 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Full Name</TableCell>
                            <TableCell align="right">Sports</TableCell>
                            <TableCell align="right">Score</TableCell>
                            <TableCell align="right">Remarks</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataObjt.map((item, index) => {
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{item.sport}</TableCell>
                                <TableCell align="right">{item.score}</TableCell>
                                <TableCell align="right">{item.remark}</TableCell>
                                <TableCell align="right"><button id={index} onClick={deleteData}>Delete</button></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
};

export default Score;