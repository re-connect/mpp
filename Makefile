SYMFONY       = symfony
CONSOLE       = $(SYMFONY) console
BIN     	  = ./vendor/bin
RECTOR        = $(BIN)/rector
PHPSTAN       = $(BIN)/phpstan
PHP_CS_FIXER  = $(BIN)/php-cs-fixer
PHPUNIT		  = $(BIN)/simple-phpunit
DEPLOYER      = $(BIN)/dep

.PHONY        :

cs: rector fix stan

ci: rector fix stan test

fixture:
	@$(CONSOLE) doctrine:fixtures:load --env=test -n

test:
	@$(PHPUNIT) tests

rector:
	@$(RECTOR) process

stan:
	@$(PHPSTAN) analyse

fix:
	@$(PHP_CS_FIXER) fix src --allow-risky=yes
	@$(PHP_CS_FIXER) fix tests --allow-risky=yes

deploy-preprod:
	@$(DEPLOYER) deploy stage=preprod

deploy-prod:
	@$(DEPLOYER) deploy stage=prod
