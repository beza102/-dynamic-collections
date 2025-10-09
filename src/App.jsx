//import data
import Header from "./components/Header";
import Footer from "./components/Footer";
import albumsData from "./data/albumData"; 

//render header and footer
function App(){
  return(
    <>
    <Header />
    <main className="album-collection">
      {albumsData.map((album, index) =>(
        //prop
        <AlbumCard
          key={index}
          album={album}
        />
      ))}
    </main>
    <Footer />
    </>
  );
}
export default App;