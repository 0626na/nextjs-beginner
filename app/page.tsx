import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
