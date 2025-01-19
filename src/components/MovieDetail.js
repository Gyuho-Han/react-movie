import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from "./MovieDetail.module.css";

function MovieDetail({coverImg, title, summary, year, genres}){
    return <div className={style.container}>
        <div>
            <img src={coverImg} alt="{title}"/>
        </div>
        <div className={style.description}>
            <h3>{year}</h3>
            <h1>{title}</h1>
            <h5>{summary}</h5>
            <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    </div>;
}

MovieDetail.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;