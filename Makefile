.PHONY: dev build start lint install clean export

## Install dependencies
install:
	npm install

## Start dev server (http://localhost:3000)
dev:
	npm run dev

## Type-check without emitting
typecheck:
	npx tsc --noEmit

## Lint
lint:
	npm run lint

## Production build (static export → out/)
build:
	npm run build

## Preview the static export locally
preview: build
	npx serve out

## Clean build artifacts
clean:
	rm -rf .next out

## Full rebuild from scratch
rebuild: clean install build

## Help
help:
	@echo ""
	@echo "  make install   — install npm dependencies"
	@echo "  make dev       — start dev server on :3000"
	@echo "  make build     — static export to ./out/"
	@echo "  make preview   — build + serve ./out/ locally"
	@echo "  make typecheck — run tsc type-check"
	@echo "  make lint      — run ESLint"
	@echo "  make clean     — remove .next/ and out/"
	@echo "  make rebuild   — clean + install + build"
	@echo ""
