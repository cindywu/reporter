import React from 'react'
import Report from './Report'

export default function ReportList(props) {
  const {
    reports,
    handleReportAdd,
    handleReportDelete,
  } = props

  return (
    <div className="report-list">
      <div>
        {reports.map(report => {
          return (
            <Report 
              key={report.id}
              handleReportDelete={handleReportDelete}
              {...report} 
            />
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