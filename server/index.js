// const express = require('express')
import React from 'react';
import express from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';

import { App } from '../client/App';

const data = {
    questions:[{

        questionId:"Q1",
        content:"Which back end solution should we use for our application?"

    },
    {

        questionId:"Q2",
        content:"What percentage of developer time should be devoted to end-to-end testing?"

    }],

    answers:[{

        answerId:"A1",
        questionId:1,
        upvotes:2,
        content: "Apache"

    },{

        answerId:"A2",
        questionId:"Q1",
        upvotes:0,
        content:"Java"

    },{

        answerId:"A3",
        questionId:"Q1",
        upvotes:4,
        content:"Node.js"

    },{

        answerId:"A4",
        questionId:"Q2",
        upvotes:2,
        content:"25%"

    },{

        answerId:"A5",
        questionId:"Q2",
        upvotes:1,
        content:"50%"

    },{

        answerId:"A6",
        questionId:"Q2",
        upvotes:1,
        content:"75%"

    }]
};

const app = new express();

app.use(express.static("dist"));

app.get('/', async (_req, res) => {

    const index = readFileSync(`public/index.html`, `utf8`);
    const rendered = renderToString(< App {...data}/>);
    res.send(index.replace("{{rendered}}", rendered));

    // res.send(
    //     `<h1>REACT IS EXCELLENT</h1>`
    // )
});

app.listen(5050);
console.log('Server Slappin');