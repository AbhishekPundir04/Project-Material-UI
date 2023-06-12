
import { Https, PermIdentity, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState,useRef } from "react";
import axios from "axios";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
 
  const [isLoading, setLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    axios
      .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIa6LEKwjJZykJqebvIw7gTpKpaVXJmz8', {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      })
      .then(res => {
        if (res.ok) {
          localStorage.setItem('token','returnSecureToken')
        } else {
          console.log(res.data);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    
  };

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          textAlign="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography variant="h4" p={3}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmitForm}>
          
            <Grid p={1}>
              <TextField
              ref={emailInputRef}
                variant="outlined"
                sx={{
                  width: "80%",
                  background: "transparent",
                }}
                
                placeholder="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentity />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid p={1}>
              <TextField
              ref={passwordInputRef}
                placeholder="Password"
                sx={{
                  width: "80%",
                  background: "transparent",
                }}
               
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Https />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={handleClickPassword}>
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type={showPassword ? "text" : "password"}
              />
            </Grid>

            <Grid p={1}>
              {!isLoading && (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "80%", height: "50px", borderRadius: "4px" }}
                >
                  Sign Up
                </Button>
              )}
              {isLoading && <p>Loading..</p>}
            </Grid>
            <Typography>
              Already have an Account:
              <Link to="/" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Typography>
          </form>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
