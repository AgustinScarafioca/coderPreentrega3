import logger from '../Config/logger.js'
import modelsUser from './models/User.js'
import connectMongo from '../Config/connectMongo.js'

connectMongo()
export default class ContainerUser {
	async get(data) {
		try {
			const user = await modelsUser.findOne({ username: data })
			return user
		} catch (err) {
			logger.error('Error al buscar un usuario ' + err)
		}
	}

	async add(data) {
		try {
			const dataAdd = new modelsUser(data)
			const add = await dataAdd.save()
			return add
		} catch (err) {
			logger.error('Error al guardar el usuario ' + err)
		}
	}
}