-- 1. Sua primeira atividade é criar as tabelas acima, com os respectivos campos.
CREATE DATABASE empresa_db;

USE empresa_db;

CREATE TABLE
    fornecedores (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nomefantasia VARCHAR(255) NOT NULL,
        razaosocial VARCHAR(255) NOT NULL,
        cnpj BIGINT (14) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        cep INT (8) NOT NULL,
        telefone INT (11) NOT NULL,
        email VARCHAR(255) NOT NULL
    );

CREATE TABLE
    categorias (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL
    );

CREATE TABLE
    produtos (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        quantidade INT NOT NULL,
        preco FLOAT NOT NULL,
        idfornecedor INT NOT NULL,
        idcategoria INT NOT NULL
    );

-- 2. Posteriormente você deverá adicionar na tabela Produtos as duas chave estrangeira, uma para controlar a relação com a tabela Fornecedores e outra para controlar a relação com a tabela Categorias. 
ALTER TABLE produtos ADD CONSTRAINT fk_fornecedor FOREIGN KEY (idfornecedor) REFERENCES fornecedores (id),
ADD CONSTRAINT fk_categoria FOREIGN KEY (idcategoria) REFERENCES categorias (id);

-- 3. Criar uma tabela chamada Cidades(idcidade, nome, uf)
CREATE TABLE
    cidades (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        uf CHAR(2)
    );

-- 4. Adicionar na tabela Fornecedores um campo chamado idcidade (do mesmo tipo de dado usado na tabela Cidades)
ALTER TABLE fornecedores
ADD COLUMN idcidade INT;

-- 5. Adicionar uma chave estrangeira na tabela Fornecedores para controlar a relação com a tabela Cidades.
ALTER TABLE fornecedores ADD CONSTRAINT fk_cidade FOREIGN KEY (idcidade) REFERENCES cidades (id);

-- 6.  Inserir 5 registros em cada tabela
INSERT INTO
    cidades (nome, uf)
VALUES
    ('Cidade A', 'SP'),
    ('Cidade B', 'RJ'),
    ('Cidade C', 'MG'),
    ('Cidade D', 'RS'),
    ('Cidade E', 'BA');

INSERT INTO
    fornecedores (
        nomefantasia,
        razaosocial,
        cnpj,
        endereco,
        cep,
        telefone,
        email,
        idcidade
    )
VALUES
    (
        'Fornecedor A',
        'Fornecedor A LTDA',
        12345678000195,
        'Rua 1, Bairro A',
        12345678,
        '11987654321',
        'fornecedorA@email.com',
        1
    ),
    (
        'Fornecedor B',
        'Fornecedor B LTDA',
        23456789000196,
        'Rua 2, Bairro B',
        95700000,
        '11987654322',
        'fornecedorB@email.com',
        2
    ),
    (
        'Fornecedor C',
        'Fornecedor C LTDA',
        34567890000197,
        'Rua 3, Bairro C',
        34567890,
        '11987654323',
        'fornecedorC@email.com',
        3
    ),
    (
        'Fornecedor D',
        'Fornecedor D LTDA',
        45678901200198,
        'Rua 4, Bairro D',
        45678901,
        '11987654324',
        'fornecedorD@email.com',
        4
    ),
    (
        'Fornecedor E',
        'Fornecedor E LTDA',
        56789012300199,
        'Rua 5, Bairro E',
        56789012,
        '11987654325',
        'fornecedorE@email.com',
        5
    );

INSERT INTO
    categorias (nome)
VALUES
    ('Categoria A'),
    ('Categoria B'),
    ('Categoria C'),
    ('Categoria D'),
    ('Categoria E');

INSERT INTO
    produtos (
        nome,
        quantidade,
        preco,
        idfornecedor,
        idcategoria
    )
VALUES
    ('Produto 1', 10, 25.50, 1, 1),
    ('Produto 2', 20, 15.75, 2, 2),
    ('Produto 3', 30, 30.00, 3, 3),
    ('Produto 4', 40, 10.00, 4, 4),
    ('Produto 5', 50, 50.00, 5, 5);

-- 7. Selecionar/mostrar o código, nome e a quantidade do produtos do fornecedor com código 1
SELECT
    id,
    nome,
    quantidade
FROM
    produtos
WHERE
    idfornecedor = 1;

-- 8. Selecionar/mostrar todos os fornecedores do CEP 95700-000
SELECT
    *
FROM
    fornecedores
WHERE
    cep = 95700000;

-- 9. Selecionar/mostrar os produtos com quantidade entre 5 e 10
SELECT
    *
FROM
    produtos
WHERE
    quantidade >= 5
    AND quantidade <= 10;

-- 10. Apagar a categoria com código 2
DELETE FROM categorias
WHERE
    id = 2;

-- 11. Alterar o CNPJ do fornecedor 3
UPDATE fornecedores
SET
    cnpj = 1234567891011
WHERE
    id = 3;

-- 12. Aumentar em 10% o preço do produtos da Categoria 1 e do Fornecedor 1
UPDATE produtos
SET
    preco = preco * 1.1
WHERE
    idcategoria = 1
    OR idfornecedor = 1;