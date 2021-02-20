import React from 'react'
import Report from './Report'

export default function ReportList({ reports }) {
  return (
    <div className="report-list">
      <div>
        {reports.map(report => {
          return (
            <Report 
              key={report.id}
              {...report} 
            />
          )
        })}
      </div>
      <div className="report-list__add-report-btn-container">
        <button className="btn btn--primary">Add Report</button>
      </div>
    </div>
  )
}