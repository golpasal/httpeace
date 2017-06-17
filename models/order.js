const mongoose = require('mongoose');
const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

// Define our model
const orderSchema = new Schema({
  orderNo: {type: String, unique: true, required: 'No Order Number Found'},
  orderDate: { type : Date, default: Date.now },
  currency: {type: String, enum: ['HKD','UKP','USD']},
  totAmount: Number,
  orderStatus: {type: Number, enum: [0,1,2,3]},
  paymentStatus: {type: Number, enum: [0,1,2,3]},
  details: [{
    detailStatus: Boolean,
    price: Number,
    _id: ObjectId,
    completeDate: Date,
    product: {
      _id: ObjectId,
      options: {
        quantity: String,
        page: String,
        size: { type: String, enum: ['A4','A3']}
      }
    }
  }],
  address: {
    consignee: String,
    country: {type: String, enum: ['HK','UK','USA']},
    address: String
  }
});

// Create the  model class
const modelClass = mongoose.model('order', orderSchema);

// Export the model
module.exports = modelClass;
