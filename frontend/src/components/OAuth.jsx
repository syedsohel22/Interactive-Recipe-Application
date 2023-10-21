import { Button, useToast } from "@chakra-ui/react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../firebase";
import { loginFailure, loginSuccess } from "../reudx/authReducer/userSlice";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch(`/api/v1/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);

      dispatch(loginSuccess(data));
      navigate("/");
      toast({
        title: "Success",
        description: "Logged in successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log("could not login with Google", error.message);
      dispatch(loginFailure(error));
      toast({
        title: "Error",
        description: `${error.message} Please try again later.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button type="button" onClick={handleGoogle}>
        Continue with Google
      </Button>
    </>
  );
};

export default OAuth;
