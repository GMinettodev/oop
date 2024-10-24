CREATE DATABASE `escola_db`;

USE `escola_db`;

CREATE TABLE
    `cidades` (
        `id_cidade` INT NOT NULL AUTO_INCREMENT,
        `nome` VARCHAR(250) NOT NULL,
        `UF` CHAR(2),
        PRIMARY KEY (`id_cidade`)
    );

CREATE TABLE
    `Area` (
        `id_area` INT NOT NULL AUTO_INCREMENT,
        `descricao` VARCHAR(250) NOT NULL,
        PRIMARY KEY (`id_area`)
    );

CREATE TABLE
    `alunos` (
        `matricula` INT NOT NULL AUTO_INCREMENT,
        `id_cidade` INT NOT NULL,
        `nome` VARCHAR(250) NOT NULL,
        `CPF` VARCHAR(15) NOT NULL,
        `data_nasc` DATE NOT NULL,
        `email` VARCHAR(250) NOT NULL,
        `endereco` VARCHAR(200) NOT NULL,
        `numero` VARCHAR(20) NOT NULL,
        `complemento` VARCHAR(50) NOT NULL,
        `telefone` VARCHAR(20) NOT NULL,
        PRIMARY KEY (`matricula`),
        FOREIGN KEY (`id_cidade`) REFERENCES `cidades` (`id_cidade`)
    );

CREATE TABLE
    `professores` (
        `siape` INT NOT NULL,
        `id_cidade` INT NOT NULL,
        `id_area` INT NOT NULL,
        `nome` VARCHAR(250) NOT NULL,
        `CPF` VARCHAR(15) NOT NULL,
        `data_nasc` DATE NOT NULL,
        `email` VARCHAR(250) NOT NULL,
        `endereco` VARCHAR(200) NOT NULL,
        `numero` VARCHAR(20) NOT NULL,
        `complemento` VARCHAR(50) NOT NULL,
        `telefone` VARCHAR(20) NOT NULL,
        PRIMARY KEY (`siape`),
        FOREIGN KEY (`id_cidade`) REFERENCES `cidades` (`id_cidade`),
        FOREIGN KEY (`id_area`) REFERENCES `area` (`id_area`)
    );

CREATE TABLE
    `turmas` (
        `id_turma` INT NOT NULL AUTO_INCREMENT,
        `turma` VARCHAR(100) NOT NULL,
        `ano` CHAR(4) NOT NULL,
        PRIMARY KEY (`id_turma`)
    );

CREATE TABLE
    `alunos_turmas` (
        `id_turma` INT NOT NULL,
        `matricula` INT NOT NULL,
        PRIMARY KEY (`id_turma`, `matricula`),
        FOREIGN KEY (`id_turma`) REFERENCES `turmas` (`id_turma`),
        FOREIGN KEY (`matricula`) REFERENCES `alunos` (`matricula`)
    );

CREATE TABLE
    `disciplinas` (
        `id_disciplina` INT NOT NULL AUTO_INCREMENT,
        `descricao` VARCHAR(250) NOT NULL,
        PRIMARY KEY (`id_disciplina`)
    );

CREATE TABLE
    `alunos_disciplinas` (
        `id_turma` INT NOT NULL,
        `id_disciplina` INT NOT NULL,
        PRIMARY KEY (`id_turma`, `id_disciplina`),
        FOREIGN KEY (`id_turma`) REFERENCES `turmas` (`id_turma`),
        FOREIGN KEY (`id_disciplina`) REFERENCES `disciplinas` (`id_disciplina`)
    );

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