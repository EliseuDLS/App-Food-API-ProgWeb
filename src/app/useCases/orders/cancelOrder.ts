//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Order"
import { Order } from '../../models/Order';

//função assíncrona chamada cancelOrder para cancelamento de um pedido 
export async function cancelOrder(req: Request, res: Response) {
	try {
		//obtém o parâmetro orderId
		const { orderId } = req.params;

		//procura e exclui o pedido no banco de dados com base no orderId 
		await Order.findByIdAndDelete(orderId);

		//se a exclusão for bem-sucedida, a função responde à solicitação HTTP
		res.sendStatus(204);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}
}
