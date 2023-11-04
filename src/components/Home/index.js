import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="container-ipl">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            this.renderLoader()
          ) : (
            <ul className="unordered">
              {teamsData.map(each => (
                <TeamCard eachTeam={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
