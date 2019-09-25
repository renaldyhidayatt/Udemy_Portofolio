import React,{Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
                sections :[
                            [
                                {name:'name', elementName:'input', type:'text', placeholder: 'Your Name*'},
                                {name:'email', elementName:'input', type:'email', placeholder: 'Your Email*'},
                                {name:'phone', elementName:'input', type:'text', placeholder: 'Your Nomor Phone*'},
                            ],
                            [
                                {name:'message', elementName:'textarea', type:'text', placeholder: 'Type Your Message*'}
                            ]
                        ]
            }

class Contact extends Component{
    render(){
        return (
            <section className="page-section" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form name="sentMessage" onSubmit={this.props.handleSubmit} noValidate="novalidate">
                        <div className="row">

                            {fields.sections.map((section,sectionIndex) => {
                                console.log("Rendering testing",sectionIndex,"with", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field 
                                                    {...field}
                                                    key={i}
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={(this.props.touched[field.name])}
                                                    errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    </div>
                                )
                            })}
                        <div className="clearfix" />
                        <div className="col-lg-12 text-center">
                            <div id="success" />
                            <button
                                className="btn btn-primary btn-xl text-uppercase" 
                                type="submit"
                                >Send Message</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come On Bro Name Your is Longer').required('Your Must give us your Name Baru'),
        email: Yup.string().email('your need to give us your a Valid Email').required('We Need Your Email Oke!!'),
        phone: Yup.string()
        .min(10,'Please provide Your 10 Digits Phone Number')
        .max(12,'Your phone Number is too Long')
        .required('We Need Your Phone Number to reach your at.'),
        message: Yup.string().min(100, 'You Need to provide us more detailed information').required('Message is Required!!!')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);