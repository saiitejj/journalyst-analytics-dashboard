import React from "react";
import "./MetricCard.css"

function MetricCard({title,value}){
    return(
        <div className="metric-card">
            <h3 className="metric-title">{title}</h3>
            <h3 className="metric-value">{value}</h3>
        </div>
    )
}

export default MetricCard;