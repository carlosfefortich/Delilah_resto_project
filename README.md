# Delilah_resto_project
This is an API for an online delivery system for a restaurant, putting into operation the necessary parts to mount a REST API that allows CRUD operations on a data structure.

## Pre-requisites
To be able to run this application, you need:
1. NodeJS: You can download it [HERE](https://nodejs.org/es/download/). You must choose between the options given according to your OS.
2. MariaDB: You can download it [HERE](https://mariadb.org/download/). You must choose between the options given according to your OS. Along with the database engine, the software its going to download HeidiSQL, which we are going to use.
 - Installation: You can just click next until they ask for the credentials. The password must be **toor**. After that you can go on until the installation is over.
3. Download or clone the files from this repository.
4. IDE: You can use whatever Integrated Development Environment that you want, but I recommend you use Visual Studio Code to avoid any mistakes. You are just going to use the console to execute some commands, so feel free to use the Command Prompt (New terminal).

## Running the app

Now that we have everything we need, we are going to start.
1. First, you need to open HeidiSQL, click on File, Load SQL File and execute the script.sql file or simply open a blank query tab and execute CREATE DATABASE `delilah_resto`.
2. Create the environment variables according to your OS and version by using the Command Prompt (New terminal), or simply create a .env file in the root folder of the project. You'll need the following environment variables:
 - PORT = 3000
 - SECRET_KEY = 'this_is_a_secret'
 - DB_NAME = 'delilah_resto'
 - DB_USER = 'root'
 - DB_PASS = 'toor'
 - DB_HOST = 'localhost'
3. Install the nodemon package:
- `npm i nodemon`

***NOTE: If you are using a terminal, make sure you are on the project folder before executing the commands***

4. Install all the dependencies by running npm install:
- `npm install`
5. Start the server by running npm start:
- `npm start`

Now the server is listening and ready to start!

As you are going to notice, once you start the app, **it will automatically create all the tables in the database named delilah_resto**, after that, you will need to create a user with 'admin' role, as this is not created automatically.

For the documentation on how to use the API you can go to the documentation folder inside this project, if you want something more visual, you can check out the [Delilah_Resto SwaggerHub Documentation](https://app.swaggerhub.com/apis-docs/carlosfefortich/Delilah_resto/1#/) for this project.

I hope you enjoy using the app!

Best regards!
