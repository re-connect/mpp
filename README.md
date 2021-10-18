# Ma petite permanence

## MPP is a simple progressive web app that allows users to note data about permanences

### Setup

#### Backend

It is a Symfony application with API platform, so you will need

* PHP 7.4 with composer API v1
* Symfony client [https://symfony.com/downloads](https://symfony.com/downloads)
* Postgresql and a database with the good credentials (I like to use a local postrgesql, but if you feel better with Docker, it takes only a few lines with the Symfony client)

To start up run : 

```bash
symfony composer install
symfony console docrine:migrations:migrate
symfony serve
```

To create a user, you can use the `symfony consoleapp:create-user ${email} ${password}` alongside the `symfony console security:encode` to encode the password you want.
Don't forget to build your bundle's assets with `symfony console assets:install`.
You can now browse the [swagger API here](https://127.0.0.1:8000/api/)

You'll need to generate jwt SLL keys with `php bin/console lexik:jwt:generate-keypair`.

#### Frontend

It is a React application, so you need:

* NodeJs (11 is good)
* yarn (1.19 is good)

Then to start, open in another terminal

```bash
cd client
yarn
yarn start
```

* You can now browse the [frontend here](https://127.0.0.1:3000/)
* As usual, you will get a CORS error on your local computer when the frontend will query the backend, there are plenty ways of solving the problem

### Authenticating

* You will need an account
* You can also SSO connect with a reconnect Pro account

### Hosting

* It is hosted on a server alongside Homepage, Preprod Reconnect Pro files bucket, Ambroise.
* There is no provisioning for this application as it does not have its own server. I don't plan to set it up as the application is not that big
