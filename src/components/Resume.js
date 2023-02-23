import { useState, useEffect } from 'react';
import { BsDownload } from 'react-icons/bs'
import { Document, Page, pdfjs } from 'react-pdf';
import { resume } from '../assets';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = 'https://raw.githubusercontent.com/JuCo168/JuCo168.github.io/main/src/assets/Resume%202.2.pdf'

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <div className='flex flex-col justify-center items-center mx-auto overflow-y-scroll'>
      <button className='bg-secondary/80 mb-6 py-3 px-8 rounded hover:saturate-150 hover:ring-1 ring-inset delay-150'>
        <a href={resume} className='flex items-center text-dark-text' target='_blank' rel='noreferrer'>
          <BsDownload className='stroke-1'/>
          <p className='ml-2 text-lg'>Download</p>
        </a>
      </button>

      <Document file={resumeLink} className='border-2 border-secondary/50 dark:border-dark-primary mb-2'>
        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} scale={width > 768 ? 1.4 : 0.6}/>
      </Document>
    </div>
  );
}