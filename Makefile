update-submodules:
	git submodule foreach git pull

docs-install:
	python3 -m pip install mkdocs mkdocs-material pdoc3

docs-generate: 
	python3 -m pdoc --html --force --output-dir docs aurorax --config "lunr_search={'fuzziness': 1}"

docs-build:
	python3 -m mkdocs build

docs-serve:
	python3 -m mkdocs serve

docs-deploy:
	python3 -m mkdocs gh-deploy --force