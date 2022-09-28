const { Schema } = require('mongoose');
const Checklistschema = require ('./Checklist')
const companySchema = new Schema({

    companyName: {
        type: String,
        required: true
    },
    stockSymbol: {
        type: String,
        required: true
    },
    currentURL: {
        type: String,
        required: true
    },
    salesRepresentative: {
        type: String
    },
    clientName: {
        type: String
    },
    clientEmail: {
        type: String
    },
    InternalReview: {
        type: Boolean,
        default: false

    },
    Development: {
        type: Boolean,
        default: true
    },
    ExternalReview: {
        type: Boolean,
        default: false
    },
    developer: {
        type: String
    },
    goesLive: {
        type: Date
    },

    checklist:{
        [
            Checklistschema
        ]
    }

})

const Company = model('Company', companySchema)
module.exports = companySchema;