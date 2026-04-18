export const TransactionHistory = ({transaction})=> {
    return (
      <table><thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  
    <tbody>
    {transaction.map((transaction)=>{
                return(
                  <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
                )
              })}
    
  </tbody>
  </table>
    )
}

