

export const Desk = ({avatar, name, tag, location})=>{
  return (
    <div>
    <img
      src={avatar}
      alt={name}
    />
    <p>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>
  )
}