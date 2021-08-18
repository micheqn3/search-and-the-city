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