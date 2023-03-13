import logger from '../Config/logger.js'
import modelsCart from './models/Cart.js'
import connectMongo from '../Config/connectMongo.js'

connectMongo();

export default class ContainerCart {
	async addCart(data) {
		try {
			const dataAdd = new modelsCart(data)
			const cartAdd = await dataAdd.save()
			return cartAdd
		} catch (err) {
			logger.error('Error al guardar el carrito ' + err)
		}
	}

	async getCart(correo) {
		try {
			const cart = await modelsCart.findOne({ 'author.username': correo })
			return cart
		} catch (err) {
			logger.error('Error al buscar el carrito ' + err)
		}
	}

	async updateCart(correo, data) {
		try {
			const prodUpdate = await modelsCart.updateOne({ 'author.username': correo }, data)
			return prodUpdate
		} catch (err) {
			logger.error('Error al buscar el carrito y actualizar ' + err)
		}
	}

	async deleteCart(correo) {
		try {
			const prodDelete = await modelsCart.deleteOne({ 'author.username': correo })
			return prodDelete
		} catch (error) {
			logger.error('Error al borrar el carrito ' + err)
		}
	}
}