import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/BannerSection'
import QuestionsSection from './components/QuestionsSection'
import ImagesSection from './components/ImagesSection'
import BodySection from './components/BodySection'
import FooterSection from './components/FooterSection'
import banner_video from './assets/banner_video.mp4'


function App() {
  return (
    <>
      <NavBar language={''} />
      <Banner />
      <BodySection>
        <QuestionsSection language={''} />

        <div className="relative w-full overflow-hidden">
          <video className="absolute w-full h-full object-cover blur-lg overflow-hidden" src={banner_video} autoPlay loop muted
          style={{ transform: 'scale(1.1)' }}/>
          <div className="relative z-10">
            <ImagesSection language={''} />
            <FooterSection language={''} />
          </div>
        </div>

      </BodySection>
    </>
  )
}

export default App
