
const express = require('express');
const Test = require("../models/test");
const { connection } = require("../config/database");


const addTest = async (name) => {
    
        const newTest = await Test.build({name});

        await newTest.save();

}

const listTest = async () => {

    return await Test.findAll({attributes: ["name"] });
};

module.exports = {
    addTest,
    listTest
};