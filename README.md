# Команда "Радиокотята", кейс от Сбера
### Порядок запуска
Первым делом установка библиотек дл python:
- pip install -r requirements.txt

Затем установка библиотек для React:
- cd mysite/frontend
- npm init -y
- npm i webpack webpack-cli --save-dev
- npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
- npm i react react-dom --save-dev

В package.json прописать скрипты:
```json
"scripts": {
  "dev": "webpack --mode development ./src/index.js --output-path ./static/frontend/main.js",
  "build": "webpack --mode production ./src/index.js --output-path ./static/frontend/main.js"
}
```
Прописать следующие команды для сборки и запуска:
- npm run build
- cd *путь к проекту*/mysite
- python manage.py makemigrations
- python manage.py migrate
- python manage.py runserver

Будут доступны следующие ссылки:
http://127.0.0.1:8000/ - итоговое отображение меню сервисов
http://127.0.0.1:8000/api/service_create/ - меню добавления сервисов в бд
http://127.0.0.1:8000/api/services/ - меню отображения всех сервисов
