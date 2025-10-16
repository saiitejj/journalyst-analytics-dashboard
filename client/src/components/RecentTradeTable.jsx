import React from "react";
import "./RecentTradeTable.css"

function RecentTradeTable({trades}){
    return (
        <div className="trade-tables-container">
            <h2 className="table-title">
                <table className="trade-tables">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Result</th>
                            <th>P/L</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trades.map((trade)=>(
                            <tr key={trade.id}>
                                <td>{trade.id}</td>
                                <td className={trade.type==='WIN'?'trade-win':'trade-loss'}>
                                    {trade.type}
                                </td>
                                <td className={trade.pnl>0 ? 'trade-win':'trade-loss'}>
                                    {trade.pnl.toFixed(2)}
                                </td>
                                <td>
                                    {trade.timestamp}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </h2>
        </div>
    )
}


export default RecentTradeTable