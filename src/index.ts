//importa as bibliotecas
import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

//conecta ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017')
	.then(() => {

		//quando a conexão com o banco de dados é estabelecida um servidor Express é criado
		const app = express();

		//define a porta do servidor
		const port = 3000;

		//configura uma rota para servir arquivos estáticos
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

		//lida com dados enviados pelo cliente no formato JSON
		app.use(express.json());

		//utiliza o módulo de roteamento
		app.use(router);

		//inicia o servidor Express 
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
	})
	//se houver erro ao conectar ao MongoDB, um erro é registrado
	.catch(() => console.log('Erro ao conectar no mongoDb'));
