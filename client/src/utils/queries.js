import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
        username,
        email,
        itineraries {
            _id,
            name,
            savedItems {
                yelpID,
                name,
                image,
                url,
                location,
                rating,
                categories,
                price
            }
        }
    }
}
`

export const GET_MY_ITINERARIES = gql`
query myItineraries {
    myItineraries {
    	_id, 
    	name
    }
}`

export const GET_ONE_ITINERARY = gql`
query getItinerary($ID: ID!) {
    itinerary(ID: $ID) {
    _id,
    name,
    userID,
    savedItems {
      _id,
      yelpID,
      name,
      image,
      url,
      location,
      rating,
      categories,
      price
    	}
    }
  }
`

