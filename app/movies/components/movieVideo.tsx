import { API_URL } from "../../page";

async function MovieVideo({ id }) {
  const video = await getMovieVideo(id);
  return <div>{JSON.stringify(video)}</div>;
}

const getMovieVideo = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  const videos = await res.json();

  return videos;
};

export default MovieVideo;
