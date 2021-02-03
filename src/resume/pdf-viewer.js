import { Document } from 'react-pdf'
import React from "react"

const ShowPDF = () => (
  <nav className="PDFViewer">
    <div className="Resume">
        <Document file="%PUBLIC_URL%/Resume.pdf" />
      </div>
  </nav>
)
export default ShowPDF