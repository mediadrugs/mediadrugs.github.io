.GODEPS:
	go install github.com/gohugoio/hugo@latest

.PHONY: build
build: .GODEPS ## Build application
	hugo --minify
	echo "mediadrugs.com" > public/CNAME

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
