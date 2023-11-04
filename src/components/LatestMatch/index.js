import './index.css'

const LastedMatch = props => {
  const {latestMatchDetails} = props
  const {
    venue,
    umpires,
    secondInnings,
    result,
    manOfTheMatch,
    firstInnings,
    date,
    competingTeamLogo,
    competingTeam,
  } = latestMatchDetails
  return (
    <div className="latest-container">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="each-logo"
      />
      <div className="align">
        <h6>First Innings</h6>
        <p>{firstInnings}</p>
        <h6>Second Innings</h6>
        <p>{secondInnings}</p>
        <h5>Man Of The Match</h5>
        <p>{manOfTheMatch}</p>
        <h6>Umpires</h6>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LastedMatch
