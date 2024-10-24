-- Criar as tabelas Disciplinas (slide 4) e MediasAlunos (slide 5) (Arquivo Slides Funções de Agregações (Atualizado))
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

CREATE TABLE
    `medias_alunos` (
        `matricula` INT NOT NULL,
        `id_turma` INT NOT NULL,
        `id_disciplina` INT NOT NULL,
        `nota` DECIMAL(3, 1) NOT NULL,
        PRIMARY KEY (`matricula`, `id_turma`, `id_disciplina`),
        FOREIGN KEY (`matricula`) REFERENCES `alunos` (`matricula`),
        FOREIGN KEY (`id_turma`) REFERENCES `turmas` (`id_turma`),
        FOREIGN KEY (`id_disciplina`) REFERENCES `disciplinas` (`id_disciplina`)
    );

-- Inserir os respectivos registros conforme as tabelas dos slide 4 e 5
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
    `medias_alunos` (matricula, id_turma, id_disciplina, nota)
VALUES
    (1000003, 1, 1, 8.5),
    (1000003, 1, 2, 8.0),
    (1000003, 2, 7, 9.0),
    (1000002, 3, 1, 6.5),
    (1000002, 3, 2, 7.2),
    (1000002, 3, 6, 7.8),
    (1000001, 7, 1, 9.5);

-- Criar um comando SQL que mostre a maior nota dos alunos na disciplina de Matemática;
SELECT
    MAX(nota)
FROM
    medias_alunos
WHERE
    id_disciplina = (
        SELECT
            id_disciplina
        FROM
            disciplinas
        WHERE
            descricao = "Matemática"
    );

-- Criar um comando SQL que mostre a maior e a menor nota do aluno com matrícula 1000003;
SELECT
    MAX(nota) AS "Maior nota",
    MIN(nota) AS "Menor nota"
FROM
    medias_alunos
WHERE
    matricula = 1000003;

-- Criar um comando SQL que mostre a média dos alunos no ano de 2020;
SELECT
    t.turma,
    ROUND(AVG(ma.nota), 2) AS "Média 2020"
FROM
    medias_alunos ma
    JOIN turmas t ON ma.id_turma = t.id_turma
WHERE
    t.ano = '2020'
GROUP BY
    t.turma;

-- Ciar um comando SQL que mostre o nome e a média de cada aluno
SELECT
    a.nome,
    ROUND(AVG(ma.nota), 2) AS media
FROM
    medias_alunos AS ma
    JOIN alunos AS a ON ma.matricula = a.matricula
GROUP BY
    a.nome;

-- Criar um comando que mostre a média dos alunos na disciplina de Português no ano de 2020
SELECT
    ROUND(AVG(ma.nota), 2) AS "Média português 2020"
FROM
    medias_alunos ma
    JOIN turmas t ON ma.id_turma = t.id_turma
WHERE
    id_disciplina = (
        SELECT
            id_disciplina
        FROM
            disciplinas
        WHERE
            descricao = "Português"
    )
    AND t.ano = "2020";

-- Criar um comando que mostre a quantidade de alunos por disciplina
SELECT
    d.descricao AS disciplinas,
    COUNT(a.matricula) AS alunos
FROM
    medias_alunos ma
    JOIN alunos a ON ma.matricula = a.matricula
    JOIN disciplinas d ON ma.id_disciplina = d.id_disciplina
GROUP BY
    d.descricao
ORDER BY
    d.descricao;