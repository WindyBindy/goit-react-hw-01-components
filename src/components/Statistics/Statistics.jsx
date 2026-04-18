


export const Statistics = ({data})=>{
  return (
    <section >
      <h2>Upload stats</h2>
      <ul>{
				data.map((item)=>{
					return (
						<li key={item.id}>
							<span>{item.label} </span>
              <span>{item.percentage}%</span>
						</li>
            
					)
				})
				
				}</ul>
        
        
        </section>
  )
}