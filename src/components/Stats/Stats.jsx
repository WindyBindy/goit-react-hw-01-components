


export const Stats = ({stats})=>{
  return (
  <ul >
    <li>
      <span >followers</span>
      <span >{stats.followers}</span>
    </li>
    <li>
      <span >Views</span>
      <span >{stats.views}</span>
    </li>
    <li>
      <span >Likes</span>
      <span >{stats.likes}</span>
    </li>
  </ul>
  )
}