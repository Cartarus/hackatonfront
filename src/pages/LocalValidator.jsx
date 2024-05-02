
// import './App.css'
import { ImagesLoader } from '../components/ImagesLoading/ImagesLoader'
import { WelcomeInformation } from '../components/Information/WelcomeInformation'
import { AppHeader } from '../components/shared/AppHeader'

export function LocalValidator() {

  return (
    <>
      <AppHeader/>
      <WelcomeInformation/>
      <ImagesLoader/>
    </>
  )
}


