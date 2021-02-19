import React from 'react'
import Report from './Report'

export default function ReportList({ reports }) {
  return (
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
    
  )
}