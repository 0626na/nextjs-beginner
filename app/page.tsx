import Link from "next/link";
import { API_URL } from "./components/constant";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(API_URL);
  const data = await res.json();

  return data;
};

async function home() {
  const movies = await getMovies();
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <Link href={`/movies/${movie.id}`}>
            <li key={movie.id}>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default home;
