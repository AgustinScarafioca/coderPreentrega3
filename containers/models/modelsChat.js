import mongoose from 'mongoose'

const collectionChat = 'chatCollection'

const schemaChat = new mongoose.Schema({
	author: {
		name: String,
	},
	text: String,
	fyh: String,
});

const modelsChat = mongoose.model(collectionChat, schemaChat)

export default modelsChat