//https://www.youtube.com/watch?v=hSsR22p35Xc
import Header from './Header';
import '../styles/FirstSection.css'
function App() {
    return (
      <div>
        <Header />
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/hSsR22p35Xc?autoplay=1&mute=1&loop=1&playlist=hSsR22p35Xc&controls=0"
            className="video" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            title="video"
          ></iframe>
        </div>
      </div>
    );
  }
export default App;