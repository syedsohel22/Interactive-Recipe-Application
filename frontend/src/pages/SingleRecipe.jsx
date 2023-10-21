import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import parse from "html-react-parser";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const SingleRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    try {
      fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setRecipe(data));
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  console.log(recipe);
  const parseTextWithNewLines = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => (
      <div key={index}>
        {line}
        {index < lines.length - 1 && <br />}{" "}
      </div>
    ));
  };

  const NutritionInfo = ({ nutrition }) => {
    return (
      <div>
        <h2>Nutrition Information</h2>
        <ul>
          {Object.keys(nutrition).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {nutrition[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <Flex
      className="dot-bg"
      pt={"100px"}
      mt={"100px"}
      flexDir={"column"}
      w={"100%"}
      mx="auto"
    >
      {recipe ? (
        <Box p={10}>
          <Heading as={"h1"} p={10}>
            {recipe.title}
          </Heading>
          <Image src={recipe.image} p={10} />
          <Heading as={"h3"} p={10}>
            instructions
          </Heading>

          <Text>{parseTextWithNewLines(recipe.instructions)}</Text>
          <Heading as={"h3"} p={10}>
            summary
          </Heading>
          <Text> {parse(recipe.summary)}</Text>
          <Box>{NutritionInfo(recipe.nutrition)}</Box>
        </Box>
      ) : (
        <Loader />
      )}
    </Flex>
  );
};

export default SingleRecipe;
