.PHONY: init-submodules update-submodules docs-install docs-update-deps docs-generate docs-build docs-serve docs-deploy clean

all:

init-submodules:
	git submodule update --init
	cd pyaurorax && \
		git checkout main && \
		git pull && \
		pip install poetry && \
		poetry install
	cd ..

update-submodules:
	git submodule foreach git pull

docs-install:
	pip install -r requirements.txt

docs-update docs-update-deps:
	pip install --upgrade -r requirements.txt

docs-generate: 
	rm -rf docs/code/pyaurorax_api_reference/*
	cd pyaurorax && poetry run python3 -m pdoc --html --force --output-dir ../docs/code/pyaurorax_api_reference pyaurorax --config "lunr_search={'fuzziness': 1}"

docs-build:
	python -m mkdocs build

docs-serve:
	python -m mkdocs serve

docs-deploy:
	python -m mkdocs gh-deploy --force

clean:
	rm -rf site
