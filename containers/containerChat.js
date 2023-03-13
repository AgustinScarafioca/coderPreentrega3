import logger from '../config/logger.js'
import modelsChat from './models/modelsChat.js'
import connectMongo from '../config/connectMongo.js'

connectMongo()

export default class ContainerChat {
	async getChat() {
		try {
			const data = await modelsChat.find({}, { _id: 0, __v: 0 })
			return data
		} catch (err) {
			logger.error('Error al buscar los mensajes ' + err)
		}
	}

	async addChat(data) {
		try {
			const dataAdd = new modelsChat(data)
			const add = await dataAdd.save()
			return add
		} catch (error) {
			logger.error('Error al guardar el mensaje ' + err)
		}
	}
}

