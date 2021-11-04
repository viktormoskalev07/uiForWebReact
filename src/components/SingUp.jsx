import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: "350px",
        top: "40%",
        transform: 'translateY(-50%)',
    },
    remember: {
       padding: "8px",
    }
}));

const theme = createTheme();

export default function SignUp() {
    const hist = useHistory();
    const classes = useStyles();
    const [code, setCode] = useState(false)
    const [password, setPassword] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const login = {
            "email": data.get('email'),
            "phone_number": '+380682575958',
            "password": data.get('password'),
            "code": data.get('code'),
            "device_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "device_platform": "ios"
        }
        axios({
            method: 'post',
            url: 'https://interqr-server-dev.herokuapp.com/management/v1/auth/verify',
            data: login
        })
            .then(function (response) {
                if (response.data.verify_method == 'password') {
                    setPassword(true)
                }
            })
            .catch(function (error) {
                setPassword(false)
                console.log(error)
                alert(error)
            });
        if(password) {
            axios({
                method: 'post',
                url: 'https://interqr-server-dev.herokuapp.com/management/v1/auth/login',
                data: login
            })
                .then(function (response) {
                    hist.push('/create')
                    localStorage.setItem('token', response.data.token);
                })
                .catch(function (error) {
                    console.log(error)
                    alert(error)
                });
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" className={classes.root}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="Ema"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            {code ? <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="code"
                                    label="Code"
                                    type="text"
                                    id="code"
                                />
                            </Grid>:""}
                            {password ? <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>: ""}
                            <Grid container alignItems={'center'} justifyContent={'space-between'}
                                   className={classes.remember}>
                                <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked value="remember" color="primary"/>}
                                        name="remember" label="Remember me"
                                    />
                                </Grid>
                                <Grid>
                                    <Link href="#">
                                        Forgot Password
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            color={'primary'}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}