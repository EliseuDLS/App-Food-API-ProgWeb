//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Order"
import { Product } from '../../models/Product';

//função assíncrona chamada listProducts para listar os produtos
export async function listProducts(req: Request, res: Response) {
	try {
		//consulta todos os produtos no banco de dados
		const products = await Product.find();

		//se a consulta for bem sucedida, a função responde com a lista de produtos em formato JSON 
		res.json(products);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}

}
