const {Company, Checklist} = require('../models')

const resolvers = {
  Query: {
    companies: async () => {
      return Company.find().sort({ createdAt: -1 });
    }
  }
};

module.exports = resolvers;