const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Company {
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


  type Checklist {
    _id:ID
    events:Boolean
    presentations: Boolean
    corporateOverview: Boolean
    IrContacts: Boolean
    boardofDirectors: Boolean
    managementTeam: Boolean
    Governance: Boolean
    stockInformation: Boolean
    company: [Company]

  }
  type Query {
    companies: [Company]
    checklist: [Checklist]
    company(_id:ID): Company

  }

  type Mutation {
    addCompany(companyName:String!, 
    stockSymbol:String!,currentURL:String, 
    salesRepresentative:String,clientName:String, 
    clientEmail:String,InternalReview:Boolean,
    Development:Boolean,ExternalReview:Boolean,
    developer:String,goesLive:String): Company

    addchecklist(companyID: ID,
    events:Boolean, presentations:Boolean,corporateOverview:Boolean,
    IrContacts:Boolean,boardofDirectors:Boolean,managementTeam:Boolean,
    Governance:Boolean,stockInformation:Boolean
    ):Company
  }
`;

module.exports = typeDefs;