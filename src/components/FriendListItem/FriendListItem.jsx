export const FriendListItem = ({avatar,name,id})=> {
    return (
        <li key={id}>
                <img src={avatar} alt="user avatar" width={100} />
                <p>{name}</p>
              </li>
    )
}

