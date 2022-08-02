import React from 'react';
import '../App.css';
import InfoBox from '../Components/InfoBox';
import Indication from '../Components/Indication';
import Footer from '../Components/Footer';
import styles from '../styles/study.module.css';

function Study() {
  return (
    <div className='App'>
      <InfoBox heading="Join Canada for study" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare ac ligula non tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pharetra efficitur ipsum eu rhoncus. Suspendisse purus mi, fringilla ut nunc sed, pretium ultricies dolor. Aliquam accumsan dictum mattis. Fusce molestie nisl eget justo feugiat, eget venenatis lacus convallis. Mauris non volutpat ipsum, quis scelerisque velit. Integer fringilla bibendum lectus id posuere. Suspendisse maximus elit vitae dolor maximus pretium. Sed bibendum lacus eu nulla imperdiet, id ullamcorper tortor varius. Nulla vulputate erat ut est consequat pellentesque nec rhoncus dolor. Nullam tincidunt diam ipsum, volutpat convallis lectus aliquet non."/>
      <Indication indication='Information Form'/>
      <div className={styles.questions}>
        <label htmlFor='Q1' className={styles.label}>1. Question 1</label>
        <select id='Q1' name='Q1' className={styles.select}>
          <option >Option one</option>
          <option>Option two</option>
          <option>Option three</option>
        </select>
        <label htmlFor='Q2' className={styles.label}>2. Question 2</label>
        <select id='Q2' name='Q2' className={styles.select}>
          <option>Option one</option>
          <option>Option two</option>
          <option>Option three</option>
        </select>
        <label htmlFor='Q3' className={styles.label}>3. Question 3</label>
        <select id='Q3' name='Q3' className={styles.select}>
          <option>Option one</option>
          <option>Option two</option>
          <option>Option three</option>
        </select>
      </div>
      <Footer />
    </div>
  )
}

export default Study