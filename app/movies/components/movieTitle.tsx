import { API_URL } from "../../page";

async function MovieTitle({ id }) {
  const title = await getMovieInfo(id);
  return <h3>{title}</h3>;
}

const getMovieInfo = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);
  const movie = await res.json();

  return movie.title;
};

export default MovieTitle;
