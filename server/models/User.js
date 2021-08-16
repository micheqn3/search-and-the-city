const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Define user model attributes
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    /*
    itineraries: [ // References itinerary model
      {
        type: Schema.Types.ObjectId,
        ref: 'Itinerary', 
      },
    ],
    */
  },
);

// Hashes user password before saving to db
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Custom method will validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;