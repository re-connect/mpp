BIN     	  = ./vendor/bin
RECTOR        = $(BIN)/rector
PHPSTAN       = $(BIN)/phpstan
PHP_CS_FIXER  = $(BIN)/php-cs-fixer
PHPUNIT		  = $(BIN)/simple-phpunit
DEPLOYER      = $(BIN)/dep

.PHONY        :

cs: rector stan fix test

test:
	@$(PHPUNIT) tests

rector:
	@$(RECTOR) process

stan:
	@$(PHPSTAN) analyse

fix:
	@$(PHP_CS_FIXER) fix src --allow-risky=yes
	@$(PHP_CS_FIXER) fix tests --allow-risky=yes

deploy:
	@$(DEPLOYER) deploy


dep: deploy
