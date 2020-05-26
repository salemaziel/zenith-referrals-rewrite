import React from 'react'
import Questions2 from './questions2'

const FAQPage = () => (
    <div className="faq">
        <div className="faq__details">
            <div className="faq__title">
            <h1>Frequently Asked Questions</h1>
        </div>
        </div>
        <div style={{display: 'block', justifyContent: 'center', alignContent: 'center', margin: 'auto', padding: '0' }} >
            <Questions2 />
        </div>
    </div>
) 
export default FAQPage