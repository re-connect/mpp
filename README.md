# Ma petite permanence

## MPP is a simple progressive web app that allows users to note data about permanences

## Setup

#### Backend

It is a Symfony application with API platform, so you will need

* PHP 8.1 with composer API v2
* Symfony client [https://symfony.com/downloads](https://symfony.com/downloads)
* Postgresql

### Database

* Install Psql
* Connect to postgres `psql`
* Create a db, user, and grant privileges

```
CREATE USER mpp WITH PASSWORD 'mpp';
CREATE DATABASE mpp;
GRANT ALL PRIVILEGES ON DATABASE "mpp" to mpp;
```

To start up run :

```bash
symfony composer install
symfony console assets:install
symfony console doctrine:migrations:migrate
symfony server:ca:install
symfony serve
```

> ⚠️ Erreur lors de la migration (ou de l’import du dump) :  
> `SQLSTATE[42501]: Insufficient privilege: 7 ERROR: permission denied for schema public`
>
> 💡 Solution : Connectez-vous sur la db `mpp` en tant qu’utilisateur `mpp` (ou `postgres`), puis exécutez les commandes suivantes :
>
> ```bash
> # Connexion à la base
> psql -U <user> -d mpp
> ```
>
> ```sql
> GRANT ALL ON SCHEMA public TO mpp;
> GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO mpp;
> ```

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

* You can now browse the [frontend here](http://127.0.0.1:3000/)
* As usual, you will get a CORS error on your local computer when the frontend will query the backend, there are plenty ways of solving the problem

## Authenticating

* Login via login form
* Or SSI via a reconnect.fr Google account
* Or SSO via a Reconnect Pro Account

## Testing

```bash
php ./vendor/bin/simple-phpunit tests
# Or using makefile
make test
```

## Deployment

```bash
php ./vendor/bin/dep deploy
# Or using Make
make deploy
```

## Code quality standards
We use php-cs-fixer, rector, and phpstan
```bash
php ./vendor/bin/rector process
php ./vendor/bin/phpstan analyse
php ./vendor/bin/php-cs-fixer fix src --allow-risky=yes
php ./vendor/bin/php-cs-fixer fix tests --allow-risky=yes
# Or using Make
make rector
make stan
make lint
# Or running all at once
make cs
```
