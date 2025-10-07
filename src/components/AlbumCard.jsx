import GenreTags from "./GenreTags";


function AlbumCard({ album }) {
  
  let cardClassName = "album-card";
  if (album.rating >= 9.0) {
    cardClassName += " high-rating";
  }

  return (
    <div className={cardClassName}>
      <h2>{album.title}</h2>
      <h3>{album.artist}</h3>

      <AlbumDetails
        year={album.year}
        rating={album.rating}
        isGrammyWinner={album.isGrammyWinner}
      />

      <GenreTags genres={album.genres} />
    </div>
  );
}

export default AlbumCard;
