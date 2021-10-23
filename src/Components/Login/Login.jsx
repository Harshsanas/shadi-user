import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    marginLeft: "10vw",
    marginTop: "2%",
    textAlign: "center",
    "& > *": {
      width: theme.spacing(45),
      height: theme.spacing(50),
    },
  },

  text:{
    paddingTop:"50px"
  },
}));

export default function Login() {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { isAuth, handleLoginAuth } = useContext(AuthContext);

  const handleLogin = () => {
    handleLoginAuth(user, pass);
    // ToggleAuth();
  };

  console.log(handleLoginAuth);
  return !isAuth ? (
    <div className={classes.root}>
      <Paper elevation={15}>
        <div className="form_container">
          <div className={classes.text}>
            <h1>LOGIN</h1>
            <TextField
              className="input"
              id="standard-password-input"
              label="Username"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <TextField
              className="input input_2"
              id="standard-password-input"
              label="Password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <br />
            <Button onClick={handleLogin} variant="contained" color="secondary">
              {isAuth ? "LOGOUT" : "LOGIN"}
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  ) : (
    <Redirect to="/userDetails" />
  );
}
