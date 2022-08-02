import React from 'react';
import '../App.css';
import InfoBox from '../Components/InfoBox';
import Indication from '../Components/Indication';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../Components/Footer';
import styles from '../styles/login.module.css'
import axios from 'axios';

function Contact() {

  //Adding a bearer token to request
  axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

  return (
    <div className='App'>
      <InfoBox heading="Join us" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare ac ligula non tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pharetra efficitur ipsum eu rhoncus. Suspendisse purus mi, fringilla ut nunc sed, pretium ultricies dolor. Aliquam accumsan dictum mattis. Fusce molestie nisl eget justo feugiat, eget venenatis lacus convallis. Mauris non volutpat ipsum, quis scelerisque velit. Integer fringilla bibendum lectus id posuere. Suspendisse maximus elit vitae dolor maximus pretium. Sed bibendum lacus eu nulla imperdiet, id ullamcorper tortor varius. Nulla vulputate erat ut est consequat pellentesque nec rhoncus dolor. Nullam tincidunt diam ipsum, volutpat convallis lectus aliquet non."/>
      <Indication indication='Any question?'/>
      <div className={styles.form}>
      <Formik 
            initialValues={{lastName: '', firstName: '', country: '', town: '', email: '', topic: '', question: ''}}
            validationSchema={Yup.object({
                lastName: Yup.string()
                .max(20, 'Must be 20 caracters or less')
                .required('Required'),
                firstName: Yup.string()
                .max(20, 'Must be 20 caracters or less')
                .required("Required"),
                country: Yup.string()
                .required('Required'),
                town: Yup.string()
                .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                topic: Yup.string().required('Required'),
                question: Yup.string().required('Required')
            })}
            onSubmit={(values, {setSubmitting}) => {
              values.userId = JSON.parse(localStorage.getItem('userInfo')).userId;
              axios.post('http://localhost:3000/api/questions', values)
              .then(res => console.log(res))
              .catch(error => console.log(error))
              setSubmitting(true)
            }}
            >
               <Form className={styles.form}>
                    <div className={styles.wrapper}>
                    <div className={styles.row}>
                    <div className={styles.left}>
         <label htmlFor="lastName" className={styles.label}>Name</label>
         <Field name="lastName" type="text" className={styles.input} placeholder='Enter your Last Name' />
         <ErrorMessage name="lastName" component='div' className={styles.error}/>
         </div>

         <div className={styles.right}>
         <label htmlFor="firstName" className={styles.label}>First Name</label>
         <Field name="firstName" type="firstName" className={styles.input} placeholder='Enter your First Name'/>
         <ErrorMessage name="firstName" component='div' className={styles.error}/>
         </div>
               </div>

               <div className={styles.row}>
                    <div className={styles.left}>
         <label htmlFor="country" className={styles.label}>Country</label>
         <Field name="country" type="text" className={styles.input} placeholder='Enter your Country' />
         <ErrorMessage name="country" component='div' className={styles.error}/>
         </div>

         <div className={styles.right}>
         <label htmlFor="town" className={styles.label}>Town</label>
         <Field name="town" type="town" className={styles.input} placeholder='Enter your town'/>
         <ErrorMessage name="town" component='div' className={styles.error}/>
         </div>
               </div>

               <div className={styles.row}>
                    <div className={styles.left}>
         <label htmlFor="email" className={styles.label}>Email</label>
         <Field name="email" type="text" className={styles.input} placeholder='Enter your email' />
         <ErrorMessage name="email" component='div' className={styles.error}/>
         </div>
               </div>

               <div className={styles.row}>
                    <div className={styles.left}>
         <label htmlFor="topic" className={styles.label}>Topic</label>
         <Field name="topic" type="text" className={styles.input} placeholder='Enter your topic' />
         <ErrorMessage name="topic" component='div' className={styles.error}/>
         </div>
               </div>

               <div className={styles.row}>
                    <div style={{width: '100%'}}>
         <label htmlFor="question" className={styles.label}>Question</label>
         <Field name="question" as='textarea' type="text" className={styles.textArea} placeholder='Enter your question' />
         <ErrorMessage name="question" component='div' className={styles.error}/>
         </div>
               </div>

               <button type="submit" className={styles.questionButton}>Send</button>
                    </div>
                </Form>
              </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;