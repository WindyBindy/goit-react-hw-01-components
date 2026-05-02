import style from "./Statistics.module.css"
const getRandomRGBColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

export const Statistics = ({data})=>{
  return (
    <section className={style.section}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.list}>{
				data.map((item)=>{
					return (
						<li key={item.id} className={style.item} style={{backgroundColor:getRandomRGBColor()}}>
							<span className={style.type}>{item.label} </span>
              <span className={style.percent}>{item.percentage}%</span>
						</li>
            
					)
				})
				
				}</ul>
        
        
        </section>
  )
}