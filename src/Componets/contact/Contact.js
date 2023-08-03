import React from 'react';
import './contact.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'

const Contact = () => {

    const yupschema = Yup.object({
        name: Yup.string().required('Enter The User Name '),
        email: Yup.string().email("Enter your correct mail").required("enter your correct mail"),
        message: Yup.string().required("Plese enter your message ")
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: yupschema,
        onSubmit: (e) => {
            alert(`Your Name:${formik.values.name}`);
            e.preventDefaults()
        }
    })

    return (
        <div className="contact-form" id='contact'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact Me</span>
                    <div className="blur" style={{ background: 'var(--purple)' }}></div>
                </div>
            </div>

            <div className="c-right">
                <Formik onSubmit={formik.handleSubmit}>
                    <div className="form">
                        <form >
                            <input
                                style={(formik.errors.name && formik.touched.name) ? { border: 'rgb(220, 20, 60) 2px solid' } : null} placeholder={(formik.errors.name && formik.touched.name) ? `${formik.errors.name}` : 'name'}
                                type="user_text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name='name' className='user' />


                            <input
                                style={(formik.errors.email && formik.touched.email) ? { border: 'rgb(220, 20, 60) 2px solid' } : null} placeholder={(formik.errors.email && formik.touched.email) ? `${formik.errors.email}` : 'Email'}
                                type="user_email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='user' />

                            <textarea

                                style={(formik.errors.message && formik.touched.message) ? { border: 'rgb(220, 20, 60) 2px solid' } : null} placeholder={(formik.errors.message && formik.touched.message) ? `${formik.errors.message}` : 'Message'}
                                name="message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} className='user'></textarea>
                            <input type="submit" className='button c-button' value=' send ' />
                            <div className="blur"></div>
                        </form>
                    </div>
                </Formik>
            </div>
        </div>
    )
}

export default Contact