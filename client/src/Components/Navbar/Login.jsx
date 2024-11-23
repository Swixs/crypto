import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Button style={{ color: "black", textTransform: "none", marginRight: 10 }} variant="text">
        Login
      </Button>
      <Button style={{ color: "black", textTransform: "none", border: "1px solid grey" }} variant="text">
        Register
      </Button>
    </div>
  );
};

export default Login;
