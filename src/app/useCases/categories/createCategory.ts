//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Category"
import { Category } from '../../models/Category';

//função assíncrona chamada createCategory para criação de uma nova categoria
export async function createCategory(req: Request, res: Response) {
	try {
		//obter os valores icon e name
		const {icon, name} = req.body;

		//cria uma nova categoria
		const category = await Category.create({icon, name});
		
		//se a criação for bem sucedida, retorna a categoria criada como JSON
		res.status(201).json(category);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}
}
