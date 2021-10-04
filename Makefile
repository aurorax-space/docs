.PHONY: init-submodules update-submodules docs-install docs-generate docs-build docs-serve docs-deploy

all:

init-submodules:
	git submodule update --init
	cd pyaurorax && \
		git checkout main && \
		git pull && \
		pip install poetry && \
		poetry add pdoc3 && \
		poetry install
	cd ..

update-submodules:
	git submodule foreach git pull

docs-install:
	python3 -m pip install --upgrade pip
	python3 -m pip install -r requirements.txt

docs-generate: 
	cd pyaurorax && \
		poetry run python3 -m pdoc --html --force --output-dir docs/python_libraries/pyaurorax/api_reference pyaurorax/aurorax --config "lunr_search={'fuzziness': 1}"

docs-build:
	python3 -m mkdocs build

docs-serve:
	python3 -m mkdocs serve

docs-deploy:
	python3 -m mkdocs gh-deploy --force
