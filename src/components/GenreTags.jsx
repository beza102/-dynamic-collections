//render genre list

export default function GenreTags({genres}){
    return(
        <div className="genre-tag">
            {genres.map((genre, index)=>(
                <span key={index} className= "genre">{genre}</span>
            ))}
        </div>
    )
}