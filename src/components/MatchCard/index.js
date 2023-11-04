import './index.css'

const MatchCard = props => {
  const {eachRecent} = props
  const {result, competingTeam, matchStatus, competingTeamLogo} = eachRecent

  const wonColor = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="list-type">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="log"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={wonColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
