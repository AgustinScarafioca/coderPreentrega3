import mongoose from 'mongoose'

const collectionUser = 'usersCollection'

const schemaUser = new mongoose.Schema({
	name: { type: String, require: true },
	lastName: { type: String, require: true },
	address: { type: String, require: true },
	age: { type: Number, require: true },
	phoneNumber: { type: Number, require: true },
	photo: { type: String, require: true },
	username: { type: String, require: true },
	password: { type: String, require: true },
	admin: Boolean,
});

const modelsUser = mongoose.model(collectionUser, schemaUser)

export default modelsUser