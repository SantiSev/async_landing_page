import { useState } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/BannerSection'
import QuestionsSection from './components/QuestionsSection'
import ImagesSection from './components/ImagesSection'
import BodySection from './components/BodySection'
import FooterSection from './components/FooterSection'
import BackgroundSection from './components/BackgroundSection'


function App() {

  const [language, setLanguage] = useState('es'); // Default language

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };


  return (
    <>
      <NavBar  language={language} onLanguageChange={handleLanguageChange} />
      <Banner/>
      <BodySection>
        <QuestionsSection language={language} />
        <BackgroundSection>
          <ImagesSection language={language} />
          <FooterSection language={language} />
        </BackgroundSection>
      </BodySection>
    </>
  )
}

export default App
