
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var paymentMethodSchema = mongoose.Schema({
    name: String,
    description: String
   },  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);
