import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

const Contact = () => (
    <div>
        <div style={{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h4>I am a contact component that imports a footer with additional message display 
        </h4>
        <h3>CLICK ON ANY BUTTON TO GO TO FOOTER WITHOUT ADDITIONAL MESSAGE</h3>
    </div>
    <Footer showMessage />
    </div>
    
)
export default Contact;