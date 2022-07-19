const mongoose = require('mongoose')

const OfferingSchema = new mongoose.Schema({
    dish_name: {
        type: String,
        required: true,
    },
    dish_description: {
        type: String,
        required: true 
    },
    serving_size: { 
        type: String,
    }, 
    ingredients: {
        type: Array,
        required:true,  
    },
    price: String,
    potential_allergens: {
        type: String, 
        default: null,
    },
    special: {
        type: String,
        default: null,
    },
});

const ReviewSchema = new mongoose.Schema({
    reviewer: ObjectID('AAA'),
    rating: Number,
    comment: String,
    },{ timestamps: true });

const reqString = {
    type: String,
    required: true,
}

const UserSchema = new mongoose.Schema({
    name:{
        first: reqString,
        middle: String, 
        last: reqString
        },
    profile_pic: String,
    bio: String,
    rating: Number,
    became_member: Date.now,
    cuisine_tags: [String],
    identify:[String],
    pickup_location: {
        address: String,
        city:String,
        state: String,
        zip: String
    },
    offerings:[OfferingSchema],
    reviews: [ReviewSchema],
    catering: false 
});

module.exports = mongoose.model('Chef', ChefSchema)