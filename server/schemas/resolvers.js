const {Company, Checklist} = require('../models')

const resolvers = {
    Query: {
     companies: async()=>{
      return Company.find().sort({createdAt:-1})
      .populate('checklist');
     },

     company: async (parent, { _id }) => {
        return Company.findOne({ _id })
        .populate('checklist');
      }
      }
    
  };
  
  module.exports = resolvers;