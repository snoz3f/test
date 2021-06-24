import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
    Button,
    Grid, InputBase,
    makeStyles, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/users";

const useStyles = makeStyles(theme => ({
    container: {
        width: '800px',
        margin: "0 auto",
    },
    paper: {
        padding: theme.spacing(1)
    },
    tableContainer: {
        marginTop: "10px",
    },
    btn: {
        margin: "10px",
    },
    input: {
        padding: theme.spacing(0, 1, 0, 1),
        borderRadius: "3px",
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        maxWidth: "200px",
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        border: "1px solid rgba(63, 81, 181, 0.5)",
    },
    pagination: {
        margin: theme.spacing(1, 1, 1, 1)
    }
}))

const UsersTable = () => {
    const [login, setlogin] = useState("")
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.items)
    const currentPage = useSelector(state => state.users.currentPage)
    const perPage = useSelector(state => state.users.perPage)
    function searchHandler(){
            dispatch(getUsers(login))
    }
    const classes = useStyles()
    const pages = [1,2,3,4,5]
    return (
        <Grid className={classes.container} justify="center" alignItems="center">
            <Paper className={classes.paper}>
                <Button
                    className={classes.btn}
                    variant="outlined"
                    onClick={() => searchHandler()}
                    color="primary">
                    Search
                </Button>
                <InputBase className={classes.input}
                           placeholder="LOGIN…"
                           value={login}
                           onChange={e => setlogin(e.target.value)}
                />
                <TableContainer className={classes.tableContainer}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Avatar_url</TableCell>
                                <TableCell align="right" >Login</TableCell>
                                <TableCell align="right">Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user =>
                                   <TableRow>
                                       <TableCell align="right">{user.avatar_url}</TableCell>
                                       <TableCell align="right">{user.login}</TableCell>
                                       <TableCell align="right">{user.type}</TableCell>
                                   </TableRow>
                            )}
                                </TableBody>
                    </Table>
                </TableContainer>
                <Pagination className={classes.pagination}
                            count={pages.length}
                            variant="outlined" shape="rounded" />
            </Paper>
        </Grid>
    );
};

export default UsersTable;