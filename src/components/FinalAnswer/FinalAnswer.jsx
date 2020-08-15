import React from 'react';
import './styles/FinalAnswer.css'

const FinalAnswer = (props) => {
    return (
        <div className='resultsContainer'>
            <div className='resultsNum'>{props.inputExpression}</div>
        </div>
    );
}

export default FinalAnswer;