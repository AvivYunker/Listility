// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://Listility_User:123456654321@cluster0.udhog.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("Listility").collection("listility_users");
//   const result = collection.findOne({"_id": 0});
//   console.log("the results are: " + result);
//   // perform actions on the collection object
//   client.close();


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
const Schema1 = new Schema({
    _id: Number,
    firstName: String,
    gender: Boolean,
});


const Model1 = mongoose.model("listility_users", Schema1);

const doc1 = new Model1({
    _id: 0,
    firstName: "Aviv",
    gender: true,
});

const doc2 = new Model1({
    _id: 1,
    firstName: "Netanel",
    gender: true,
});

const doc3 = new Model1({
    _id: 2,
    firstName: "Boris",
    gender: true,
});


// doc1.save();
// doc2.save();
// doc3.save();

async function getTheData(theInsertedModel) {
    const aviv = await theInsertedModel.findById(Int32(0));
    console.log(aviv.firstName);
}

getTheData(Model1);