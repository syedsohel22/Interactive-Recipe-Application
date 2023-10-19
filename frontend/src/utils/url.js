const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=sweet&number=10&type=dessert`;
export default URL;
