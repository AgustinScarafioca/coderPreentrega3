import ContainerCart from '../containers/containerCart.js'
import ContainerProd from '../containers/containerProduct'

const cart = new ContainerCart()
const producto = new ContainerProd()

export const getCart = (req, res) => {
	const correo = req.user.username
	const user = req.user.username
	const avatar = req.user.photo
	const saludo = `Bienvenido ${user}`
	cart.getCart(correo).then((carrito) => {
		res.render('UserLogin/cart', { carrito, avatar, saludo })
	});
};

export const postProductCart = (req, res) => {
	const correo = req.user.username
	const idProducto = req.body.id
	cart.getCart(correo).then((cart) => {
		if (cart === null) {
			const newCart = {
				author: {
					name: req.user.name,
					lastName: req.user.lastName,
					address: req.user.address,
					phoneNumber: req.user.phoneNumber,
					username: req.user.username,
				},
				productos: [],
				timestamp: Date.now(),
			};
			cart.addCart(newCart)
		}
	});
	producto.getId(idProducto).then((producto) => {
		let product = producto
		cart.updateCart(correo, { $push: { productos: product } })
	});
	res.redirect('/products')
};
export const deleteProductCart = (req, res) => {
	const idProducto = req.body.id
	const idcart = req.user.username

	producto.getId(idProducto).then((producto) => {
		let product = producto
		cart.updateCart(idcart, { $pull: { productos: product } })
		// res.redirect('/cart');
	});
};

export const deleteCart = (req, res) => {
	cart.deleteCart(req.user.username)
	res.redirect('/products')
};