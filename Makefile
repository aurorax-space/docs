.PHONY: init-submodules update-submodules docs-install docs-update-deps docs-generate docs-build docs-serve docs-deploy clean

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
	python3 -m pip install -r requirements.txt

docs-update-deps:
	python3 -m pip install --upgrade -r requirements.txt

docs-generate: 
	cd pyaurorax && \
		poetry run python3 -m pdoc --html --force --output-dir ../docs/code/pyaurorax_api_reference pyaurorax --config "lunr_search={'fuzziness': 1}"

docs-build:
	python3 -m mkdocs build

docs-serve:
	python3 -m mkdocs serve

docs-deploy:
	python3 -m mkdocs gh-deploy --force

clean:
	rm -rf site
