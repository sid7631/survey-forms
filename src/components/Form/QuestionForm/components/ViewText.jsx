import React from 'react'

const ViewText = ({ question, i }) => {

    if (question.open) {
        return ''
    }
    return (
        <>
            <div className="question-top">
                <div
                    className='question-text'
                >
                    {question.questionText}
                </div>
            </div>
            <div className='question-body'>
                <div className="question-option" >
                    <div style={{ width: '100%' }}>
                        <input
                            type="text"
                            className='text-input'
                            placeholder='Enter your answer'
                            disabled
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewText
