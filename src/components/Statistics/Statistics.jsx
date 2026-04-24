import style from "./Statistics.module.css"


export const Statistics = ({data})=>{
  return (
    <section className={style.section}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.list}>{
				data.map((item)=>{
					return (
						<li key={item.id} className={style.item}>
							<span className={style.type}>{item.label} </span>
              <span className={style.percent}>{item.percentage}%</span>
						</li>
            
					)
				})
				
				}</ul>
        
        
        </section>
  )
}