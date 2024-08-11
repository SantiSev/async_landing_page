import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/BannerSection'
import QuestionsSection from './components/QuestionsSection'
import ImagesSection from './components/ImagesSection'
import BodySection from './components/BodySection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
      <NavBar language={''} />
      <Banner />
        <BodySection>
          <QuestionsSection language={''} />
          <ImagesSection language={''}  />
          <FooterSection />
        </BodySection>
      </>
      )
}

      export default App
