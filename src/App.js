
import './App.css';
import Footer from './components/Footer';
import FreeTrial from './components/FreeTrial';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhotosStylish from './components/PhotosStylish';
import SnapPhotos from './components/SnapPhotos';
import SocialMedia from './components/SocialMedia';

function App() {

  return (
    <div className="body">
      <Header />
      <HeroSection />
      <SnapPhotos />
      <SocialMedia />
      <PhotosStylish />
      <FreeTrial  />
      <Footer />
    </div>
  );
}

export default App;
