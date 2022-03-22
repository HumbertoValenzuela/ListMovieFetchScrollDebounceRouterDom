
export async function getMovies(path) {

  const API = process.env.REACT_APP_API;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  const resultado = await fetch(API + path, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  return await resultado.json();


}