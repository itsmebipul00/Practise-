const express= require('express')
const SibApiV3Sdk = require('sib-api-v3-sdk')
require('dotenv').config()

const app= express()

app.use('/sendmail', (req, res, next) => {
    const email= req.query.email
    // console.log(email)
    let apikey= process.env.SIB_API_KEY
    let defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = apikey

    let apiInstance = new SibApiV3Sdk.ContactsApi(); 
    let createContact = new SibApiV3Sdk.CreateContact(); 
    createContact.email = email; 
    createContact.listIds = [2]; 

    apiInstance.createContact(createContact).then((data) => {
        // success 
        res.status(200); 
        res.send("success");
    }, function (error) {
        // error
        console.log(error)
        res.status(500); 
        res.send("failure");
    })

})

app.use((req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})



app.listen(5000)