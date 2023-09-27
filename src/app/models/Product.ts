//importa as bibliotecas
import {model, Schema } from 'mongoose';

//classe 'Product' que representa os produtos
export const Product = model('Product', new Schema({

	//nome do produto e é uma string obrigatória
	name: {
		type: String,
		required: true,
	},
	//descrição do produto e é uma string obrigatória
	description: {
		type: String,
		required: true,
	},
	//caminho para a imagem do produto e é uma string obrigatória
	imagePath: {
		type: String,
		required: true,
	},
	//preço do produto e é um número obrigatório
	price: {
		type: Number,
		required: true,
	},
	//lista de ingredientes em um produto
	ingredients: {
		required: true,
		type:[{
			//nome do ingrediente
			name: {
				type: String,
				required: true,
			},
			//ícone do ingrediente
			icon: {
				type: String,
				required: true,
			},
		}],
	},
	//referência a uma categoria
	category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category',
	},
}));
