import styles from "../styles";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

const resumeLink = 'https://raw.githubusercontent.com/JuCo168/juliusco.io/main/src/assets/Resume%202.2.pdf'

export default function Resume() {
    return (
      <div className="flex flex-col justify-center items-center">
        <Document file={resumeLink} 
        style={{
          height: '200vh',
          width: '200vw',
          margin: 'auto',
        }}>
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>
    );
}