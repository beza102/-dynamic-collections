//show year, rating, 
export default function AlbumDetails ({year, rating, isGrammyWinner}){
   let grammyBadge;
   let displayYear;
   let displayRating;

   //conditional rendering for grammy badge
   if(isGrammyWinner){
    grammyBadge =<span className="badge grammy-badge">GRAMMY WINNER🏆</span>
   }else{
    grammyBadge =<span className="badge">No Grammy😞</span>
   }
    
   //edge case for missing year
   if(year){
    displayYear =year;
   }else{
    displayRating ='Year N/A'
   }

   //edge case for  if rating is valid
   if(typeof rating === 'number' && !isNaN(rating)){
    displayRating = rating.toFixed(1)
   }else{
    displayRating='Unrated';
   }
   

    
    return(
        <div className="album-details">
            <p>Release Year: {displayYear}</p>
            <p>Rating: {displayRating}</p>
            {grammyBadge}
        </div>
    );
}
