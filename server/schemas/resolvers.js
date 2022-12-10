const {Company, Checklist} = require('../models')

const resolvers = {
  Query: {
    companies: async () => {
      return Company.find().sort({ createdAt: -1 });
    }
  },
  Mutation:{
    addCompany: async (parent,args) => {
const company = await Company.create(args);
return company;
    }
  }
};

module.exports = resolvers;