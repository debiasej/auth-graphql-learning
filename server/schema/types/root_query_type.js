const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID } // At least GraphQL needs one field
  }
});

module.exports = RootQueryType;
