//importa as funcionalidades Request e Response
import { Request, Response } from 'express';

//importa o modelo "Order"
import { Product } from '../../models/Product';

//função assíncrona chamada createProduct para criação de um novo produto
export async function createProduct(req: Request, res: Response) {
	try {
		//obtém o nome da imagem do produto
		const imagePath = req.file?.filename;

		//obtém os dados do produto 
		const { name, description, price, category, ingredients } = req.body;

		//cria um novo produto no banco de dados usando o modelo "Product" e os dados fornecidos
		const product = await Product.create({
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients:ingredients ? JSON.parse(ingredients): [],
		});

		//se a criação do produto for bem sucedida, a função responde à solicitação e retorna o novo produto criado em formato JSON
		res.status(201).json(product);
	} catch (error) {
		//se ocorrer algum erro durante o processo, a função responde indicando que houve um problema
		console.log(error);
		res.sendStatus(500);
	}
}
