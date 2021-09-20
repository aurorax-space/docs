.PHONY: update-submodules docs-install docs-generate docs-build docs-serve docs-deploy

all:

init:
	git submodule update --init
	cd pyaurorax
	git checkout main
	pip install poetry
	poetry install
	cd ..

update-submodules:
	git submodule foreach git pull

docs-generate: 
	python3 -m pdoc --html --force --output-dir docs/pyaurorax pyaurorax/aurorax --config "lunr_search={'fuzziness': 1}"

docs-build:
	python3 -m mkdocs build

docs-serve:
	python3 -m mkdocs serve

docs-deploy:
	python3 -m mkdocs gh-deploy --force

