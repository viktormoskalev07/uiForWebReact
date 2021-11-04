import React from 'react';
import {Container, Grid } from '@material-ui/core';
import background from '../images/background.png';
import logo from '../images/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from "../components/SingUp";


const useStyles = makeStyles(() => ({
    root: {
        overflow: "hidden"
    },
}));


const Login = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item md={6}>
                    <img src={logo} alt="logo"/>
                    <SignUp/>
                </Grid>
                <Grid item md={6}>
                    <img src={background} alt="background"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;