import React,{useState,useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {postApi} from '../services/apiservice';
import {stateContext} from '../context';
import {setIsAuthenticated, setUserName} from '../context/action';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.dark
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn({ history }) {
  const classes = useStyles();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [inValidEmail, setInValidEmail] = useState('');
  const context = useContext(stateContext);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      setIsLoading(true);
        const user={emailId,password};
        const response= await postApi('auth',user);
        localStorage.setItem('accessToken',response.token);
        context.dispatch(setIsAuthenticated(true));
        context.dispatch(setUserName(`${response.firstName} ${response.lastName}`));
        history.push('/')
        setIsLoading(false);
    } catch(error){
        setIsLoading(false);
    }
  }

  const changeInPassword=(event)=>{
      setPassword(event.target.value)
  }

  const changeInEmailId=(event)=>{
    setEmailId(event.target.value)
  }

  const onEmailChange=(event)=> {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value)){
      setInValidEmail("");
    } else {
      setInValidEmail('Invalid Email format');
    }
  }

  return (
      <React.Fragment>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={emailId}
                      error={inValidEmail}
                      helperText={inValidEmail}
                      onChange={changeInEmailId}
                      onBlur={onEmailChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={changeInPassword}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/signup">Need an account? Signup</Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
          <Backdrop className={classes.backdrop} open={isLoading}>
              <CircularProgress color="inherit" />
          </Backdrop>
      </React.Fragment>
  );
}