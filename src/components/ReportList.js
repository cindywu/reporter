import React, { useContext } from 'react'
import Report from './Report'
import { ReportContext } from './App'

export default function ReportList({ reports }) {
  const { handleReportAdd } = useContext(ReportContext)
  return (
    <div className="report-list">
      <div>
        {reports.map(report => {
          return (
            <Report key={report.id} {...report} />
          )
        })}
      </div>
      <div className="report-list__add-report-btn-container">
        <button 
          className="btn btn--primary"
          onClick={handleReportAdd}
        >
          Add Report
        </button>
      </div>
    </div>
  )
}