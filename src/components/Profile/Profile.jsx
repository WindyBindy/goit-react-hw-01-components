
import {Stats} from "../Stats/Stats"
import {Desk} from "../Desk/Desk"
export const Profile = ({username, tag, location, avatar,stats})=>{
  return (
  <div>
  <Desk avatar={avatar} tag={tag} name={username} location={location}/> 
  <Stats stats={stats}  />
</div>
  )
}