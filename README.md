# AuroraX Documentation

This repository contains the documentation website for AuroraX, found at https://docs.aurorax.space. The site has information about AuroraX and its data, the API, client libraries for Python and IDL, and more.

## Requirements

- Python 3.6+

## Installation

This documentation repository contains pages discussing AuroraX, and also API reference documentation for supporting client libraries (ie. Python packages). To generate these API reference pages, we use "submodules" to link other repositories. Currently only [PyAuroraX](https://github.com/aurorax-space/pyaurorax) is linked as a submodule.

To generate documentation for submodules. they must first be initialized and their dependencies installed. You can either use a makefile target we have, or initialize the submodule manually.

1. Clone repository

```
$ git clone git@github.com:aurorax-space/docs.git
```

2. Initialize submodules

```
$ git submodule update --init
$ cd pyaurorax
$ git checkout main
$ python3 -m pip install poetry
$ poetry install
$ cd ..
```

3. Submodules don't automatically update when changes are pushed to their upstream repositories, so updates must be pulled manually.

```
$ git submodule foreach git pull
```

4. Install mkdocs dependencies

```
$ python3 -m pip install -r requirements.txt
```

5. Since the submodules in this repository are Python projects, their API references can be generated automatically using ```pdoc3```. This step generates HTML files and places them in the ```docs/<submodule_name>``` directory.

```
$ python3 -m pdoc --html --force --output-dir docs/pyaurorax pyaurorax/aurorax --config "lunr_search={'fuzziness': 1}"
```

6. Build and serve the website locally.

```
$ python3 -m mkdocs serve
```

7. View the website at http://localhost:8000.

<br />

## How deployment works

Deployment is done using the MkDocs ```gh-deploy``` command and is done manually. This command will build the docs, commit them to the "gh-pages" branch, and push this branch to GitHub. _Please make sure to build and preview any changes locally first_.

```
$ python3 -m mkdocs gh-deploy --force
```

<br />

## Editing pages

Markdown files used to generate the documentation are located in the ```docs``` directory. Add or edit existing documents directly in this directory.

The navigation menu is generated from the structure provided in the ```mkdocs.yml``` file. To modify the navigation menu, modify this file and rebuild the docs.

<br />

## Resources

- [MkDocs documentation](https://www.mkdocs.org/)
- [pdoc3](https://pdoc3.github.io/pdoc/doc/pdoc/)