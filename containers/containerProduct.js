import logger from '../Config/logger.js'
import modelsProduct from './models/Product.js'
import connectMongo from '../Config/connectMongo.js'

connectMongo();
export default class ContainerProd {
	async add(data) {
		try {
			const dataAdd = new modelsProduct(data)
			const add = await dataAdd.save(dataAdd)
			return add
		} catch (err) {
			logger.error('Error al guardar el producto ' + err)
		}
	}

	async get(name) {
		try {
			if (name) {
				const data = await modelsProduct.find({ name: name })
				return data
			} else {
				const data = await modelsProduct.find()
				return data
			}
		} catch (err) {
			logger.error('Error al buscar los productos ' + err)
		}
	}
	async getId(id) {
		try {
			const data = await modelsProduct.findById(id)
			return data
		} catch (err) {
			logger.error('Error al buscar los productos ' + err)
		}
	}

	async update(id, data) {
		try {
			const update = await modelsProduct.findByIdAndUpdate(id, data)
			return update
		} catch (err) {
			logger.error('Error al buscar y actualizar los productos ' + err)
		}
	}

	async delete(id) {
		try {
			const del = await modelsProduct.deleteOne({ _id: id })
			return del
		} catch (err) {
			logger.error('Error al buscar y eliminar los productos ' + err)
		}
	}
}