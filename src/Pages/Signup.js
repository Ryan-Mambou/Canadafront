import React from 'react';
import '../App.css';
import styles from '../styles/login.module.css'
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
  return (
    <div className='App'>
        <h2 className={styles.heading}>Create your account</h2>
        <div className={styles.form}>
        <Formik 
            initialValues={{lastName: '', firstName: '', country: '', town: '', email: '', password: '', confirmPassword: ''}}
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
                password: Yup.string().required('Required'),
                confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required("Required"),
            })}
            onSubmit={(values, {setSubmitting}) => {
                axios.post('http://localhost:3000/api/auth/signup', values)
                .then(res => {
                    if (res.data.message === 'New user added'){
                        navigate('/login')
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
         <label htmlFor="password" className={styles.label}>Password</label>
         <Field name="password" type="password" className={styles.input} placeholder='Enter your password' />
         <ErrorMessage name="password" component='div' className={styles.error}/>
         </div>

         <div className={styles.right}>
         <label htmlFor="confirmPassword" className={styles.label}>Re-type Password</label>
         <Field name="confirmPassword" type="password" className={styles.input} placeholder='Enter your confirmPassword'/>
         <ErrorMessage name="confirmPassword" component='div' className={styles.error}/>
         </div>
               </div>
               <button type="submit" className={styles.button}>Register</button>
         <h4 style={{marginTop: '20px', color: '#707070', fontSize: '1.5rem'}}>Already have an account? <Link className={styles.link} to='/login'>Login</Link></h4>
                    </div>
                </Form>
            </Formik>
        </div>
        <Footer />
    </div>
  )
}

export default Signup