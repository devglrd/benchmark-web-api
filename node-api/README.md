# Api for Stein Project


## Database config are in the .env file

run `cp .env.example .env` and had value of your database


## Steps to run this project:

- If you have docker
    - Run for serve
        - `docker-compose up -d stein-api-serve`
    - Run for production
        - `docker-compose up --build -d stein-api`

- If you dont have docker
    - Run for serve
        - `npm run start`
    - Run for production
        - `npm run prod`

