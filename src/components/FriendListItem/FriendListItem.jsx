import style from "./FriendListItem.module.css"

export const FriendListItem = ({avatar,name,id,isOnline})=> {
    return (
        <li key={id} className={style.item}>
                <span className={isOnline? style.online: style.offline}></span>
                <img src={avatar} alt="user avatar" width={100}  />
                <p className={style.name}>{name}</p>
            </li>
    )
}

