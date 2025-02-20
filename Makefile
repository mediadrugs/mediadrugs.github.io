HUGO_URI := -tags extended,withdeploy github.com/gohugoio/hugo@v0.128

.GODEPS:
	CGO_ENABLED=1 go install ${HUGO_URI}

.PHONY: build
build: #.GODEPS ## Build application
	# hugo --minify
	CGO_ENABLED=1 go run ${HUGO_URI} --minify
	echo "mediadrugs.com" > public/CNAME

.PHONY: run
run: ## Run application
	yarn start

.PHONY: watch
watch: ## Watch application
	go run ${HUGO_URI} server

.PHONY: test
test: ## Run tests
	go run ${HUGO_URI}

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
