//importa as bibliotecas
import {model, Schema } from 'mongoose';

//classe 'Category' com dois campos 'name' e 'icon'
export const Category = model('Category', new Schema({
	name: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	}
}));