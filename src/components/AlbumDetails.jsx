//show year, rating, 



export default function AlbumDetails ({year, rating, isGrammyWinner}){
   let grammyBadge;

   if(isGrammyWinner){
    grammyBadge =<span className="badge grammy-badge">GRAMMY WINNER</span>
   }else{
    grammyBadge =<span className="badge">No Grammy</span>
   }
    
    
    return(
        <div className="album-details">
            <p>Release Year: {year}</p>
            <p>Rating: {rating}</p>
            {grammyBadge}
        </div>
    );
}
