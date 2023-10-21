const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const URL = `https://api.spoonacular.com/recipes/?apiKey=${apiKey}`;
const localURL = `http://localhost:8080`;
export { URL, localURL };
