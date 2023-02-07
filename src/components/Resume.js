import styles from "../styles";
import { resume } from "../assets";
import { Document, Page } from 'react-pdf';
import { Navbar, Footer } from '.';

export default function Resume() {
    return (
      <div className={`w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Document file={resume}>
            </Document>
          </div>
        </div>

        <div className={`{styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
      );
}