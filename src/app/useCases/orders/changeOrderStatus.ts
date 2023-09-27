//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Order"
import { Order } from '../../models/Order';

//função assíncrona chamada changeOrderStatus para alterar o status de um pedido
export async function changeOrderStatus(req: Request, res: Response) {
	try {

		//obtém o parâmetro orderId 
		const { orderId } = req.params;

		//obtém o novo status do pedido
		const { status } = req.body;

		//verifica se o novo status está entre os valores permitidos, se não estiver, a função responde indicando o erro
		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
			return res.status(400).json({
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
			});
		}

		//se o novo status for válido, a função atualiza o status do pedido no banco de dados
		await Order.findByIdAndUpdate(orderId, { status });

		//se a atualização for bem sucedida, a função responde indicando que o status do pedido foi alterado com sucesso
		res.sendStatus(204);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}
}
