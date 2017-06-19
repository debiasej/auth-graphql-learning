const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
} = graphql

const UserType = new GraphQLObjectType({
  name: 'UsertType',
  fields: {
    email: { type: GraphQLString }
  }
})

module.exports = UserType;
