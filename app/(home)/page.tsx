import Movie from "@myapp/components/movie";
import styles from "@myapp/styles/home.module.css";
import {Metadata} from "next";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata: Metadata = {
  title: "Home",
};

const getMovies = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
      ))}
    </div>
  );
}
