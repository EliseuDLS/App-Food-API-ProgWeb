//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Order"
import { Order } from '../../models/Order';

//função assíncrona chamada createOrder para criar um pedido
export async function createOrder(req: Request, res: Response) {
	try {

		//obtém os dados da solicitação
		const {table, products} = req.body;

		//cria um novo pedido no banco de dados
		const order = await Order.create({ table, products });

		//se a criação do pedido for bem sucedida, a função responde à solicitação e retorna o novo pedido criado em formato JSON
		res.status(201).json(order);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}
}
