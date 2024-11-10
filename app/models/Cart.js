const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    items: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
            },
        }
    ],
    duedate: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        default: 10,
    },
    finished: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Cart", cartSchema)