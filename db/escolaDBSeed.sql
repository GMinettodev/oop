INSERT INTO
    `cidades` (nome, UF)
VALUES
    ('São Paulo', 'SP'),
    ('Rio de Janeiro', 'RJ'),
    ('Belo Horizonte', 'MG'),
    ('Porto Alegre', 'RS'),
    ('Curitiba', 'PR');

INSERT INTO
    `area` (descricao)
VALUES
    ('Informática/Programação'),
    ('Informática/Redes'),
    ('Matemática'),
    ('Física');

INSERT INTO
    `alunos` (
        matricula,
        id_cidade,
        nome,
        CPF,
        data_nasc,
        email,
        endereco,
        numero,
        complemento,
        telefone
    )
VALUES
    (
        1000001,
        1,
        'Marcele da Silva',
        '000.000.000-11',
        '1908-12-12',
        'marcele.silva@bento.ifrs.edu.br',
        'Endereço 1',
        '123',
        'Apt 1',
        '123456789'
    ),
    (
        1000002,
        1,
        'Matirde da Rocha',
        '000.009.239-99',
        '2010-09-09',
        'martide.rocha@gmail.com',
        'Endereço 2',
        '456',
        'Apt 2',
        '987654321'
    ),
    (
        1000003,
        1,
        'João dos Santos',
        '999.999.000-77',
        '2010-01-10',
        'joao.santos@gmail.com',
        'Endereço 3',
        '789',
        'Apt 3',
        '555555555'
    ),
    (
        1000004,
        1,
        'Maria Rita',
        '111.222.333-44',
        '2001-05-04',
        'maria.rita@gmail.com',
        'Endereço 4',
        '101',
        'Apt 4',
        '444444444'
    ),
    (
        1000005,
        1,
        'Zézinho Oliveira',
        '555.666.777-88',
        '1998-04-05',
        'zezinho.oliveira@gmail.com',
        'Endereço 5',
        '202',
        'Apt 5',
        '333333333'
    ),
    (
        1000006,
        1,
        'Carol da Rosa',
        '999.101.101-11',
        '1984-12-12',
        'carol.rosa@mail.com',
        'Endereço 6',
        '303',
        'Apt 6',
        '222222222'
    ),
    (
        1000007,
        1,
        'Marina da Rosa',
        '121.121.121-13',
        '1980-02-02',
        'marina.rosa@gmail.com',
        'Endereço 7',
        '404',
        'Apt 7',
        '111111111'
    );

INSERT INTO
    `professores` (
        siape,
        id_cidade,
        id_area,
        nome,
        CPF,
        data_nasc,
        email,
        endereco,
        numero,
        complemento,
        telefone
    )
VALUES
    (
        5000001,
        1,
        1,
        'Ronaldo Serpa da Rosa',
        '000.000.000-01',
        '2010-09-09',
        'ronaldo.rosa@bento.ifrs.edu.br',
        'Endereço 1',
        '123',
        'Apt 1',
        '123456789'
    ),
    (
        4000002,
        1,
        1,
        'Thyago Salvá',
        '000.000.000-02',
        '2001-05-04',
        'thyago.salva@bento.ifrs.edu.br',
        'Endereço 2',
        '456',
        'Apt 2',
        '987654321'
    ),
    (
        6500003,
        1,
        1,
        'Mauricio Rosito',
        '000.000.000-03',
        '1984-12-12',
        'mauricio.rosito@bento.ifrs.edu.br',
        'Endereço 3',
        '789',
        'Apt 3',
        '555555555'
    ),
    (
        3300004,
        1,
        2,
        'Ivan Prá',
        '000.000.000-04',
        '1908-12-12',
        'ivan.pra@bento.ifrs.edu.br',
        'Endereço 4',
        '101',
        'Apt 4',
        '444444444'
    ),
    (
        7700005,
        1,
        3,
        'Delair Oliveira',
        '000.000.000-05',
        '1998-04-05',
        'delair.oliveira@bento.ifrs.edu.br',
        'Endereço 5',
        '202',
        'Apt 5',
        '333333333'
    ),
    (
        9900006,
        1,
        3,
        'Diego da Silva',
        '000.000.000-06',
        '1980-02-02',
        'diego.silva@bento.ifrs.edu.br',
        'Endereço 6',
        '303',
        'Apt 6',
        '222222222'
    ),
    (
        1999007,
        1,
        4,
        'Paulo Rocha',
        '000.000.000-07',
        '2010-01-10',
        'paulo.rocha@bento.ifrs.edu.br',
        'Endereço 7',
        '404',
        'Apt 7',
        '111111111'
    );

INSERT INTO
    `turmas` (turma, ano)
VALUES
    ('1º ano Info', '2018'),
    ('1º ano Info', '2019'),
    ('1º ano Info', '2020'),
    ('2º ano Info', '2019'),
    ('2º ano Info', '2020'),
    ('3º ano Info', '2019'),
    ('3º ano Info', '2020');

INSERT INTO
    `disciplinas` (descricao)
VALUES
    ('Matemática'),
    ('Português'),
    ('Banco de dados'),
    ('Inglês'),
    ('Programação Web'),
    ('Redes de Computadores'),
    ('Filosofia');

INSERT INTO
    `alunos_disciplinas` (id_turma, id_disciplina)
VALUES
    (1, 1), -- Alunos in Matemática
    (1, 2), -- Alunos in Português
    (2, 3), -- Alunos in Banco de Dados
    (3, 4), -- Alunos in Inglês
    (4, 5), -- Alunos in Programação Web
    (5, 6), -- Alunos in Redes de Computadores
    (6, 7);

-- Alunos in Filosofia
INSERT INTO
    `medias_alunos` (matricula, id_turma, id_disciplina, nota)
VALUES
    (1000003, 1, 1, 8.5),
    (1000003, 1, 2, 8.0),
    (1000003, 2, 7, 9.0),
    (1000002, 3, 1, 6.5),
    (1000002, 3, 2, 7.2),
    (1000002, 3, 6, 7.8),
    (1000001, 7, 1, 9.5);

INSERT INTO
    `medias_alunos` (matricula, id_turma, id_disciplina, nota)
VALUES
    (1000003, 1, 1, 8.5),
    (1000003, 1, 2, 8.0),
    (1000003, 2, 7, 9.0),
    (1000002, 3, 1, 6.5),
    (1000002, 3, 2, 7.2),
    (1000002, 3, 6, 7.8),
    (1000001, 7, 1, 9.5);