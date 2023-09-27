//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Order"
import { Order } from '../../models/Order';

//função assíncrona chamada listOrders para listar os pedidos
export async function listOrders(req: Request, res: Response) {
	try {

		//ordena os pedidos por data de criação
		const orders = await Order.find()
			.sort({creatAt: 1})
			.populate('products.product');

		//se a consulta for bem sucedida, a função responde à solicitação com a lista de pedidos
		res.json(orders);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}

}
