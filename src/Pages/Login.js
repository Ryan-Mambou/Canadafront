import React from 'react';
import '../App.css';
import Footer from '../Components/Footer';
import styles from '../styles/login.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  return (
    <div className='App'>
        <h2 className={styles.heading}>Login to Join Canada</h2>

        <div className={styles.form}>
            <Formik 
            initialValues={{email: '', password: ''}}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
            })}
            onSubmit={(values, {setSubmitting}) => {
              axios.post('/login', values)
              .then(res => {
                if (res.data.hasOwnProperty('token')){
                  navigate(`/`);
                  localStorage.setItem('userInfo', JSON.stringify(res.data))
                  localStorage.setItem('isLoggedIn', 'true')
                }
                console.log(res)
              })
              .catch(error => console.log(error))
              setSubmitting(true)
            }}
            >
            <Form className={styles.form}>
                <div className={styles.wrapper}>
                <div className={styles.row}>
                    <div className={styles.left}>
         <label htmlFor="email" className={styles.label}>Email address</label>
         <Field name="email" type="email" className={styles.input} placeholder='Enter your email' />
         <ErrorMessage name="email" component='div' className={styles.error}/>
         </div>

         <div className={styles.right}>
         <label htmlFor="password" className={styles.label}>Password</label>
         <Field name="password" type="password" className={styles.input} placeholder='Enter your password'/>
         <ErrorMessage name="password" component='div' className={styles.error}/>
         </div>
               </div>
 
         <button type="submit" className={styles.button}>Login</button>
         <h4 style={{marginTop: '20px', color: '#707070', fontSize: '1.5rem'}} className={styles.font}>Do not have an account? <Link className={styles.link} to='/signup'>Register</Link></h4>
         </div>
       </Form>
            </Formik>

        </div>
        <Footer />
    </div>
  )
}

export default Login