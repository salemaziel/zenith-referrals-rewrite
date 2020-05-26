import React from 'react'
import Questions2 from './questions2'

const FAQPage = () => (
    <div className="faq">
        <div>
            <h1
                style={{
                    color: 'white',
                    textShadow: '2px 2px 3px rgba(13, 72, 121, 1)'
                }}
            >Frequently Asked Questions</h1>
        </div>
        <div style={{display: 'block', justifyContent: 'center', alignContent: 'center', margin: 'auto', padding: '0' }} >
            <Questions2 />
        </div>
    </div>
)
export default FAQPage