//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Category"
import { Category } from '../../models/Category';

//função assíncrona chamada listCategories para listagem de categorias
export async function listCategories(req: Request, res: Response) {
	try {
		//consulta todas as categorias no banco de dados
		const categories = await Category.find();

		//se a consulta for bem sucedida, a função responde com a lista de categorias em formato JSON 
		res.json(categories);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}
}
