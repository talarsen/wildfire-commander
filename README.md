# Wildfire Commander 🚒

***

This is my capstone project for Techtonica.

## Acknowledgements 🙏 👏 
Thank you to the patient mentors who spent countless hours helping me throughout this project and to the managers at Techtonica who believed in me, helped guide me and supported me in my journey to becoming a software developer. 

* Andrew Peterson 
* Danielle Penny
* Richie Thomas
* George Song
* Sarah Cawley
* Christina Rodriquez

***

## Inspiration
 There are many reasons why I wanted to build this app. When I was young, my entire family was affected by the Lexington Fire. We didn't lose our homes but our neighbors did, and it was devastating. My parents live in a high fire zone. Their property and home has been threatened by three serious fires. My brother works as a bulldozer operator for Cal Fire and is often in harm's way on the fire line.  My finance also works on wildfires in the summer.  I built this app because I want to make wildfire management more efficient and safer for fire crews.
 
 
## Technologies
 Wildfire Commander is built with the PERN(PostgreSQL, Express, React, Node) stack.

# APIS
  * Google React Maps
  * Open Weather 


### [🔥 Heroku Link 🔥 ](https://stark-badlands-48876.herokuapp.com/) in action.

[![Deploy to Heroku][deploy-badge]][deploy-workflow]
[![Reset Heroku DB][reset-badge]][reset-workflow]

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## To Use

***

### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use [Homebrew][] on macOS: `brew install --cask docker`
- [Follow the instructions on the Docker website][docker-www]

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

-[See the PostgreSQL Docker image documentation for more
information][dh-postgres].

### Node

You'll need to install Node v14 or above. [`nvm`][nvm] is highly recommended.

## Set Up the Development Environment

***

### Install NPM Packages

```sh
npm install
```

### Copy and Create .env file
1. In App, copy the example environment file

   ```sh
   cp .env.example .env
   ```

2. Change the environmental variables for your API keys...

>REACT_APP_TITLE=Wildfire Commander
>REACT_APP_SUBTITLE=Keep Fire Crews Safe, Save >Time and Money
>
>REACT_APP_INCIDENT_MAP=paste your API key here
>
>REACT_APP_OPENWEATHER_API_KEY=paste your api key here
>
>REACT_APP_OPENWEATHER_URL='https://api.>openweathermap.org/data/2.5'
>
>REACT_APP_OPENWEATHER_ICON_URL=https://>openweathermap.org/img/w


### Initialize the Database

Let's set up the database server, create the application database, and seed it
with some data. You only need to do this the first time you set up your
development environment.

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

## Start the Development Environment

```sh
npm start
```

Visit <http://localhost:3000>.

## Shut Down the Development Environment

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm stop` to stop and destroy the PostgreSQL Docker container. Don't worry,
   your data is safe.

## Need to Start a `psql` Session?

```sh
npm run psql
```

## Want More Details?

- [Read about the application stack](docs/application-stack.md).
- [Read about the Express server](server/README.md).
- [Read about the React app](app/README.md).


 


