import {
  Https,
  PermIdentity,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoading, setLoading] = useState(false);
  const [inputValue, setIputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(inputValue, "enteredEmail");
    console.log(passwordValue, "setPasswordValue");
    const payload = {
      email: inputValue,
      password: passwordValue,
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "res");
          localStorage.setItem("TOKEN", res.data.token);
          navigate("/dashboard")
          // window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
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
            Please Login
          </Typography>
          <form onSubmit={handleSubmitForm}>
            <Grid p={1}>
              <TextField
                onChange={(event) => setIputValue(event.target.value)}
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
                onChange={(event) => setPasswordValue(event.target.value)}
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
                  Login
                </Button>
              )}
              {isLoading && <p>Loading..</p>}
            </Grid>
            <Typography>
              Do you have an account?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                SignUp
              </Link>
            </Typography>
          </form>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
