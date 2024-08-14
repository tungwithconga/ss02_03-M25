import React from 'react';
import styles from './components/FormRegister.module.css';

const FormRegister = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Form Sign up</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="email" placeholder="you@company.com" />
        </div>
        <div className={styles.inputGroup}>
          <label>Phone number</label>
          <input type="text" placeholder="+84 (123) 456-789" />
        </div>
        <div className={styles.inputGroup}>
          <label>Address</label>
          <textarea placeholder="Tell us a little about the project..."></textarea>
        </div>
        <div className={styles.skills}>
          <label>Skills</label>
          <div className={styles.checkboxGroup}>
            <div>
              <input type="checkbox" id="html" />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" id="ux" />
              <label htmlFor="ux">UX design</label>
            </div>
            <div>
              <input type="checkbox" id="css" />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" id="javascript" />
              <label htmlFor="javascript">JavaScript</label>
            </div>
            <div>
              <input type="checkbox" id="reactjs" />
              <label htmlFor="reactjs">ReactJS</label>
            </div>
            <div>
              <input type="checkbox" id="java" />
              <label htmlFor="java">Java</label>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Sign up</button>
      </form>
    </div>
  );
};

export default FormRegister;
