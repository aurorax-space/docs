# AuroraX documentation repository
Documentation for AuroraX, PyAuroraX, and related projects.

## Setup & initialization
This repository uses submodules to access the source code of the projects it documents. Currently only [PyAuroraX](https://github.com/aurorax-space/pyaurorax) is linked as a submodule.

Submodules must be initialized and their dependencies must be installed before docs can be auto-generated. To initialize submodules and install their dependencies in one step, use the Makefile:
```console
$ make init
```

Alternatively, follow the initialization and installation steps below.

### Initializing submodules
This step pulls code from PyAuroraX's latest upstream commit and switches the submodule to its main branch. From the root directory run:

```console
$ git submodule update --init
$ cd pyaurorax
$ git checkout main
```

### Installing submodule dependencies
Submodule dependencies must be installed before docs can be auto-generated.

For PyAuroraX:
```console
$ cd pyaurorax
$ pip install poetry
$ poetry install
```


## Updating submodules
Submodules don't automatically update when changes are pushed to their upstream repositories. Therefore, updates must be pulled manually.

To update a submodule, pull updates from the upstream repository:
```console
$ make update-submodules
```

The submodule will be updated to the latest upstream commit.

## Editing pages
Markdown files used to generate the documentation are located in the ```docs``` directory. Add or edit existing documents directly in this directory.
### Editing the navigation menu
The navigation menu is generated from the structure provided in the ```mkdocs.yml``` file. To modify the navigation menu, modify this file and rebuild the docs.

## Generating docs for Python packages
The submodules in this repository are Python projects. API references are generated for submodules automatically using ```pdoc3```. This step generates HTML files in the ```docs/<submodule_name>``` directory. To auto-generate package documentation:

```console
$ make docs-generate
```

_This step may later have to be broken into multiple steps depending on the structure of new projects added to the documentation website._

## Building and previewing
To build the documentation website:

```console
$ make docs-build
```

This will build the HTML files and assets into the ```site``` directory.

To serve the website locally:
```console
$ make docs-serve
```

The website will be available for preview at http://localhost:8000.

## Deploying
Deployment is done using MkDocs ```gh-deploy``` command. This step will build the docs, commit them to the ```gh-pages``` branch, and push the ```gh-pages``` branch to GitHub. __You will not be able to preview the site before it is deployed, so please make sure to build and preview any changes locally first.__

To deploy the documentation:
```console
$ make docs-deploy
```

## Resources
- [MkDocs documentation](https://www.mkdocs.org/)
- [pdoc3](https://pdoc3.github.io/pdoc/doc/pdoc/)