import style from "./FriendListItem.module.css"

export const FriendListItem = ({avatar,name,id})=> {
    return (
        <li key={id} className={style.item}>
                <img src={avatar} alt="user avatar" width={100}  />
                <p className={style.name}>{name}</p>
            </li>
    )
}

