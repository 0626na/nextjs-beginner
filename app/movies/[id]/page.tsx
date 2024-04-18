import { Suspense } from "react";
import MovieTitle from "../components/movieTitle";
import MovieVideo from "../components/movieVideo";

export default async function movieDetail({ params: { id } }) {
  return (
    <div>
      <h1>movie detail page</h1>
      <Suspense fallback={<h1>movie Title Loading...</h1>}>
        <MovieTitle id={id} />
      </Suspense>

      <Suspense fallback={<h1>movie video Loading...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
