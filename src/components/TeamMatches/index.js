import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LastedMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    teamBannerUrl: '',
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    console.log(newData)
    const latest = newData.latestMatchDetails
    const formattedLasted = {
      venue: latest.venue,
      umpires: latest.umpires,
      secondInnings: latest.second_innings,
      result: latest.result,
      matchStatus: latest.match_status,
      manOfTheMatch: latest.man_of_the_match,
      id: latest.id,
      firstInnings: latest.first_innings,
      date: latest.date,
      competingTeamLogo: latest.competing_team_logo,
      competingTeam: latest.competing_team,
    }
    const formattedRecentMatches = newData.recentMatches.map(matches => ({
      result: matches.result,
      competingTeam: matches.competing_team,
      matchStatus: matches.match_status,
      id: matches.id,
      competingTeamLogo: matches.competing_team_logo,
    }))

    console.log(formattedLasted)
    console.log(formattedRecentMatches)
    this.setState({
      latestMatchDetails: formattedLasted,
      recentMatches: formattedRecentMatches,
      teamBannerUrl: newData.teamBannerUrl,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {
      latestMatchDetails,
      teamBannerUrl,
      recentMatches,
      isLoading,
    } = this.state
    return (
      <div>
        {isLoading ? (
          <div>{this.renderLoader()}</div>
        ) : (
          <div className="team-match-container">
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <h1>Latest Matches</h1>
            <LastedMatch
              latestMatchDetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="unordered order">
              {recentMatches.map(eachMa => (
                <MatchCard eachRecent={eachMa} key={eachMa.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
