//render genre list

export default function GenreTags({genres}){

    //conditional :check if the genre array exist
    if(!genres ||genres.length ===0){
        return <div className="genre-tag empty">No genres listed</div>
    }    
    return(
        <div className="genre-tag">
            {genres((genre, index)=>(
                <span key={index} className= "genre"></span>
            ))}
        </div>
    )
}