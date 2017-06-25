const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql

const UserType = new GraphQLObjectType({
  name: 'UsertType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
})

module.exports = UserType;
