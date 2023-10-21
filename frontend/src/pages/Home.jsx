import { Box, Button } from "@chakra-ui/react";
import Loader from "../components/Loader";

const Home = () => {
  const handleClick = async () => {
    const res = await fetch(`/api/v1/users/hello`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <Box
      className="dot-bg"
      h={"100vh"}
      mt={"90px"}
      flexDir={"column"}
      w={"100%"}
      mx="auto"
    >
      Home
      <Button onClick={handleClick}>test</Button>
      {/* <Loader /> */}
    </Box>
  );
};

export default Home;
