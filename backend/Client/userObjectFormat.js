
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { append } = require('express/lib/response');
const { Int32 } = require('mongodb');
require('dotenv').config();

const urlDB = process.env.urlDB;
mongoose.connect(urlDB);


const app = express();
app.set('view engine', 'ejs');
app.listen(3000);


const Schema = mongoose.Schema;
const userNotSSOSchema = new Schema({
    _id: Number,
    username: String,
    password: String,
    safeWord: String,
});

const userYesSSOSchema = new Schema({
    _id: Number,
    provider: Number,
    ssoId: String,
    expiration: String, 
});

const userNotSSOModel = mongoose.model("listility_users", userNotSSOSchema);
const userYesSSOModel = mongoose.model("listility_users", userYesSSOSchema);


const usr1 = new ModelUser({ // this is a none SSO user, this is a doc
    username: "someone@something.com",
    password: "12345",
    safeWord: "whatever",
});

const usr2 = new ModelUser({ // this is a SSO user
    provider: 1,
    ssoId: "8923u4589ejfo",
    expiration: "09/09/2025",
});

usr1.save();
usr2.save();


// async function getTheData(theInsertedModel) {
//     const aviv = await theInsertedModel.findById(Int32(0));
//     console.log(aviv.firstName);
// }


// async function getTheData(modelNotSSO, modelYesSSO) {
//     const locatedUser = await theInsertedModel.findById();
//     console.log("The provider is: " + usr1.provider);
//     const locatedUser = await the 

    // try {
    //     const firstUser = await modelNotSSO.username("someone2@something.com").then(
    //         (firstUser) => {
    //             return firstUser.username;
    //         }, (error) => {
    //             // return await modelNotSSO.username;
    //             throw error;
    //         }
    //     );
    // } catch(e) {
    //     console.log(e);
    //     console.log("\nIt should be 'yes SSO'\n");
    // }
    // const firstUser = await theInsertedModel.username("someone2@something.com");
    // console.log(firstUser.safeWord); // should be "cheese"
// }

// getTheData(Model1);