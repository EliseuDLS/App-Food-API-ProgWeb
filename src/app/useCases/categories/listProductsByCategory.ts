//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Product"
import { Product } from '../../models/Product';

//função assíncrona chamada listProductsByCategory para listagem de produtos 
export async function listProductsByCategory(req: Request, res: Response) {
	try {
		//ela obtém o parâmetro categoryId
		const {categoryId} = req.params;

		//consulta todos os produtos no banco de dados que pertencem à categoria especificada pelo categoryId
		const products = await Product.find().where('category').equals(categoryId);

		//se a consulta for bem sucedida, a função responde com a lista de produtos em formato JSON 
		res.json(products);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}

}
