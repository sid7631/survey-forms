import React from 'react'
import CenteredTabs from './CenteredTabs'
import FormHeader from './FormHeader'
import QuestionForm from './QuestionForm/QuestionForm'

const Form = () => {
    return (
        <div style={{backgroundColor:'#f4f4f9', minHeight:'calc(100vh - 100px)', paddingBottom:'100px'}}>
            <FormHeader />
            <CenteredTabs />
            {/* <QuestionForm /> */}
        </div>
    )
}

export default Form
