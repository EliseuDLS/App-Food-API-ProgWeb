//importa as bibliotecas
import {model, Schema } from 'mongoose';

//classe 'Order' que armazena informações sobre pedidos
export const Order = model('Order', new Schema({

	//mesa à qual o pedido está associado e é uma string obrigatória
	table: {
		type: String,
		required: true,
	},
	//status do pedido, só pode ser um dos três valores: 'WAITING', 'IN_PRODUCTION' ou 'DONE'
	status: {
		type: String,
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
		default: 'WAITING',
	},
	//armazena a data e hora em que o pedido foi criado
	creatdAt: {
		type: Date,
		default: Date.now,
	},
	//lista de produtos em um pedido
	products: {
		required: true,
		type:[{
			//referência a um modelo "Product"
			product: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
			//número de unidades desse produto no pedido
			quantity: {
				type: Number,
				default: 1,
			},
		}],
	},
}));
