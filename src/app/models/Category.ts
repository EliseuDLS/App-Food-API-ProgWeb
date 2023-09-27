//importa as bibliotecas
import {model, Schema } from 'mongoose';

//classe 'Category' que armazena informações sobre categorias, que deverão ter um nome e um ícone definidos
export const Category = model('Category', new Schema({

	//nome da categoria e é do tipo String
	name: {
		type: String,
		required: true,
	},
	//ícone associado à categoria e também é do tipo String
	icon: {
		type: String,
		required: true,
	}
}));
