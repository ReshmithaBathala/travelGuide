import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItem from './components/TravelItem'
import './App.css'

class App extends Component {
  state = {
    travelGuideData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTravelDetails()
  }

  getTravelDetails = async () => {
    const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(travelGuidePackagesApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const {packages} = data

      const updatedData = packages.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        imageUrl: eachData.image_url,
        description: eachData.description,
      }))
      this.setState({travelGuideData: updatedData, isLoading: false})
    }
  }

  render() {
    const {travelGuideData, isLoading} = this.state
    console.log(travelGuideData)
    return (
      <div className="travel-guide-main-container">
        <h1 className="travel-guide-heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="travel-container">
            {travelGuideData.map(eachTravel => (
              <TravelItem travelDetails={eachTravel} key={eachTravel.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
