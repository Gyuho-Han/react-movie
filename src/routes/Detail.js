import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail.js";
import styles from "../components/MovieDetail.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState(null);
    const { id } = useParams();
    const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (<div>
    {loading ? <div className={styles.loading}><span>Loading...</span></div> : <div>
        {
            <MovieDetail 
                key={movie.id}
                coverImg={movie.large_cover_image} 
                year={movie.year}
                title={movie.title} 
                summary={movie.description_full} 
                genres={movie.genres}
            />
        }
        </div>}
    </div>);
}
export default Detail;   