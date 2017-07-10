import gpl from 'graphql-tag'

export default gpl`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password) {
  	id
    email
  }
}` 
