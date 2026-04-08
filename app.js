const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Criando uma conexão com o banco de dados
const db = new sqlite3.Database(':memory:'); // Usando um banco de dados em memória para este exemplo

// Criando tabela para produtos
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      name TEXT,
      price REAL
    )
  `);
});

// Rota para obter todos os produtos
app.get('/products', (req, res) => {
  db.all('SELECT * FROM products', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
