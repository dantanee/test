import React from 'react';
import Footer from './Footer';
const Features = () => (
    <div >
        <div style={{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h4 >I am a features component that imports a footer without additional message display </h4>
    </div>
    <Footer/>
    </div>
)
export default Features;