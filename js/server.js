const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); // Importa a biblioteca SQLite
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rota de exemplo para listar produtos
app.get('/api/produtos', (req, res) => {
    // Aqui você pode consultar um banco de dados ou fornecer dados hardcoded
    const produtos = [
        { id: 1, nome: 'Orquídea', preco: 200.00 },
        { id: 2, nome: 'Girassol', preco: 100.00},
        // ... adicione mais produtos
    ];

    res.json(produtos);
});

// Rota de exemplo para processar pedidos
app.post('/api/pedido', (req, res) => {
    const pedido = req.body; // Supõe que o corpo da requisição contenha informações do pedido
    // Aqui você pode processar o pedido, calcular o total, salvar no banco de dados, etc.

    res.json({ mensagem: 'Pedido recebido com sucesso!' });
});

// Criação do banco de dados e tabelas
const db = new sqlite3.Database('floricultura.db', err => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        )`, err => {
            if (err) {
                console.error('Erro ao criar tabela de usuários:', err.message);
            }
        });
    }
});

// Rota para adicionar um usuário
app.post('/api/usuarios', (req, res) => {
    const { username, password } = req.body;
    
    const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.run(insertQuery, [username, password], function(err) {
        if (err) {
            console.error('Erro ao adicionar usuário:', err.message);
            res.status(500).json({ error: 'Erro ao adicionar usuário' });
        } else {
            res.json({ message: 'Usuário adicionado com sucesso', userId: this.lastID });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});