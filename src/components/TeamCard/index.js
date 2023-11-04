import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <li className="match-container">
      <Link to={`/team-matches/${id}`} className="little">
        <div className="division">
          <img src={teamImageUrl} alt={`${name}`} className="team" />
          <p className="head">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
