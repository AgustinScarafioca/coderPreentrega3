import mongoose from 'mongoose'

const collectionCart = 'cartCollection'

const schemaCart = new mongoose.Schema({
	author: {
		name: { type: String, require: true },
		lastName: { type: String, require: true },
		address: { type: String, require: true },
		phoneNumber: { type: Number, require: true },
		username: { type: String, require: true },
	},
	productos: [],
	timestamp: String,
});

const modelsCart = mongoose.model(collectionCart, schemaCart)

export default modelsCart