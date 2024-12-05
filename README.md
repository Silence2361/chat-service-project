## Технологии

Node.js и NestJS
PostgreSQL
Objection ORM
Swagger
Docker

## Инструкция по запуску

## Зависимости

npm install

## Создать файл .env в корне проекта

.env.example

## Запуск PostgreSQL, создать БД и создать таблицы

CREATE DATABASE chat_service;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL UNIQUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chats (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
id SERIAL PRIMARY KEY,
chat_id INT REFERENCES chats(id) ON DELETE CASCADE,
author_id INT REFERENCES users(id) ON DELETE CASCADE,
text TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_chats (
user_id INT REFERENCES users(id) ON DELETE CASCADE,
chat_id INT REFERENCES chats(id) ON DELETE CASCADE,
PRIMARY KEY (user_id, chat_id)
);

## Запуск Docker

docker-compose up --build

## Запуск

npm run start

## Swagger

http://localhost:9000/api
