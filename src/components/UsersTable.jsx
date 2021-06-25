import React, {useState} from 'react';
import {
    Button,
    Grid, InputBase,
    makeStyles, Paper,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/users";
import {DataGrid} from "@material-ui/data-grid";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    container: {
        width: '850px',
        margin: "0 auto",
    },
    paper: {
        padding: theme.spacing(1)
    },
    btn: {
        margin: "10px",
    },
    input: {
        padding: theme.spacing(0, 1, 0, 1),
        borderRadius: "3px",
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        maxWidth: "200px",
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        border: "1px solid rgba(63, 81, 181, 0.5)",
    },
    table: {
        height: "600px"
    }
}))

const columns = [
    {
        field: 'avatar_url',
        headerName: 'avatar_url',
        width: 340,
        editable: true,
    },
    {
        field: 'login',
        headerName: 'login',
        width: 240,
        editable: true,
    },
    {
        field: 'type',
        headerName: 'type',
        width: 240,
        editable: true,
    }
];




const UsersTable = () => {
    const [login, setlogin] = useState("")
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.items)
    const isFetchError = useSelector(state => state.users.isFetchError)
    let rows = users.map(user => ({
        id: user.id,
        avatar_url: user.avatar_url,
        login: user.login,
        type: user.type
    }))

    function searchHandler() {
        dispatch(getUsers(login))
    }

    const classes = useStyles()
    return (
        <Grid className={classes.container}>
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
                {isFetchError &&
                <Alert severity="error">An error has occurred</Alert>
                }
                {!isFetchError &&
                <DataGrid className={classes.table}
                    columns={columns}
                    rows={rows}
                    pageSize={9}
                />}

            </Paper>
        </Grid>
    );
};

export default UsersTable;