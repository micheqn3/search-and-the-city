import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token, 
        user {
            _id,
            username,
            email,
        }
    }
}
`
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token, 
        user {
            _id,
            username,
            email,
        }
    }
}
`

export const ADD_ITINERARY = gql`
mutation addItinerary($name: String!) {
    addItinerary(name: $name) {
    	_id, 
    	name
    }
}
`

export const REMOVE_ITINERARY = gql`
mutation removeItinerary($ID: ID!) {
    removeItinerary(ID: $ID) {
      _id, 
      name
    }
  }
`

export const ADD_SAVED_ITEM = gql`
mutation addSavedItems($yelpID: String!, $name: String!, $image: String!, $url: String!, $location: String!, $rating: Float!, $categories: [String!], $price: String, $itinName: String!) {
    addSavedItems(yelpID: $yelpID, name: $name, image: $image, url: $url, location: $location, rating: $rating, categories: $categories, price: $price, itinName: $itinName) {
      _id, 
      name
    }
  }
`