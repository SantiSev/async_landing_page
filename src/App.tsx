import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import QuestionsSection from './components/QuestionsSection'
import ImagesSection from './components/ImagesSection'
import BodySection from './components/BodySection'

function App() {
  return (
    <>
      <NavBar language={''} />
      <Banner />
        <BodySection>
          <QuestionsSection language={''} />
          <ImagesSection language={''}  />
        </BodySection>
      </>
      )
}

      export default App
