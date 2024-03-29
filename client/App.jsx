import React from 'react';

export const App = (questions, answers) => (
    <div>
        <h1>
            Q&A Tool
        </h1>
        
        {questions.map(({questionId, content}) => (
            <div key={questionId}>
                <h3>
                    {content}
                </h3>
            </div>
        ))}
    </div>
);
