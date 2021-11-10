## Prequisites To Use

***

### 1. Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use [Homebrew](https://brew.sh/) on macOS: `brew install --cask docker`
- Follow the appropriate instructions for your machine on the [Docker](https://docs.docker.com/get-docker/) website.

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

See the [PostgreSQL Docker Image](https://hub.docker.com/_/postgres) documentation for more
information.


### 2. Node

Installation of [node version manager](https://github.com/nvm-sh/nvm) is highly recommended.

## Steps to Use Locally

***

### 1. Fork and clone this repo
### 2. Install NPM Packages
```sh
npm install
```

### 3. Copy and Create .env file in the App directory
3a. In App, copy and create the example environment file

  ```sh
  cp .env.example .env
  ```

3b. Copy the environmental variables below and paste them into your new .env file that you created in step 3a. Obtain API keys for the Incident Map variable- [Google React Maps](https://developers.google.com/maps/documentation/javascript/get-api-key) and the Open Weather API key variable-[Open Weather API](https://openweathermap.org/appid).

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


### 4. Initialize the Database

Let's set up the database server, create the application database, and seed it
with some data. You only need to do this the first time you set up your
development environment.

👉 In your CLI, from the root directory, run the command npm run db:init to set up the database

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