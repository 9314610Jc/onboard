const { Schema,model, Types} = require('mongoose');

const Checklistschema = new Schema({

    events: {
        type: Boolean,
        default: false
    },
    presentations: {
        type: Boolean,
        default: false
    },
    corporateOverview: {
        type: Boolean,
        default: false
    },
    IrContacts: {
        type: Boolean,
        default: false
    },
    boardofDirectors: {
        type: Boolean,
        default: false
    },
    managementTeam: {
        type: Boolean,
        default: false
    },

    Governance: {
        type: Boolean,
        default: false
    },
    stockInformation: {
        type: Boolean,
        default: false
    },
    company:
        {
            type: Schema.Types.ObjectId,
            ref: 'Company'
        }
    
})

const Checklist = model('Checklist', Checklistschema);


module.exports = Checklist;