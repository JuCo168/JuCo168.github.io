import { useState, useEffect } from 'react';
import { BsDownload } from 'react-icons/bs'
import { Document, Page, pdfjs } from 'react-pdf';
import { resume } from '../assets';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = 'https://raw.githubusercontent.com/JuCo168/JuCo168.github.io/main/src/assets/Resume%202.2.pdf'

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <Document file={resumeLink} >
        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} scale={width > 768 ? 1.4 : 0.6}/>
      </Document>

      <button className='bg-tertiary mt-6 py-2 px-4 rounded'>
        <a href={resume} target='_blank' className='flex items-center'>
          <BsDownload/>
          <p className='ml-2'>
          Download
          </p>
        </a>
      </button>
    </div>
  );
}