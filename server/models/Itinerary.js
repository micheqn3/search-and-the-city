const { Schema, model } = require('mongoose');

// Define itinerary model attributes

const itinerarySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    userID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    savedItems: [ 
      {
        yelpID: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        image: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        },
        location: {
          type: String,
          required: true
        },
        rating: {
          type: Number, 
          required: true
        },
        categories: [
          {
            type: String,
            required: true 
          }
        ],
        price: {
          type: String
        }
      }
    ],
  },
);

const Itinerary = model('Itinerary', itinerarySchema);

module.exports = Itinerary;