const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Company{
   _id:ID
   companyName: String
   stockSymbol: String
   currentURL: String
   salesRepresentative: String
   clientEmail:String
   clientName: String
   InternalReview: Boolean
   Development: Boolean
   ExternalReview:Boolean
   developer:String
  goesLive: String
  checklist: [Checklist]
}

  type Query {
  companies: [Company]
checklist: [Checklist]
  
  }
`;

module.exports = typeDefs;