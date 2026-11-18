create table usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome nvarchar(100) NOT NULL, email nvarchar(200) UNIQUE NOT NULL, senha nvarchar(12) NOT NULL, data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP);

create table destinos (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo nvarchar(100) NOT NULL, descricao nvarchar(500), local nvarchar(MAX) NOT NULL, faixa_preco NUMERIC(8,2), img nvarchar(MAX), data_criacao DATETIME CURRENT_TIMESTAMP);

