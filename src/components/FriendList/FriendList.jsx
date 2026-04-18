import {FriendListItem} from "../FriendListItem/FriendListItem"

export const FriendList = ({friends})=>{
  return (
    <ul>
  {friends.map((friends)=>{
            return(
              <FriendListItem key={friends.id} name={friends.name} avatar={friends.avatar}/>
            )
          })}
    </ul>

  )
}