import {
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NewsBox = () => {
    const rows = [
        createData('Frozen yoghurt', 159),
        createData('Ice cream sandwich', 237),
        createData('Eclair', 262),
    ];

    const cells = [
        'S.No', 'News', 'Dates'
    ]

    function createData(news, date) {
        return {news, date};
    }

    function handleReadMoreChange() {
        console.log("Read More")
    }

    return (
        <TableContainer className='overlay box' component={Paper} sx={{maxWidth: 650, color: 'inherit'}}>
            <Table sx={{minWidth: 300, maxWidth: 650}}>

                <caption align='right'>
                    <Button onClick={handleReadMoreChange} type='primary'>Read More</Button>
                </caption>

                <TableHead>
                    <TableRow>
                        {cells.map((cell, index) => (
                            <TableCell key={index}>
                                <Typography color='primary'>{cell}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.news}>
                            <TableCell><Typography color='primary'>{index + 1}</Typography></TableCell>
                            <TableCell component="th" scope="row" sx={{color: 'secondary'}}>
                                <Button type='secondary'>{row.news}</Button>
                            </TableCell>
                            <TableCell align="right"><Typography
                                color='secondary'>{row.date}</Typography></TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}

export default NewsBox
