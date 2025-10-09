import GenreTags from "./GenreTags";
import AlbumDetails from "./AlbumDetails";


function AlbumCard() {
  
  let cardClassName = "album-card";
  //conditional
  if (album.rating >= 9.0) {
    cardClassName += " high-rating";
  }

  return (
    <div className={cardClassName}>
      <h2>{album.title}</h2>
      <h3>{album.artist}</h3>

      <AlbumDetails
      //prop
        year={album.year}
        rating={album.rating}
        isGrammyWinner={album.isGrammyWinner}
      />

      <GenreTags genres={album.genres} />
    </div>
  );
}

export default AlbumCard;
