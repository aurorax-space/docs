# AuroraX documentation repository

This repository contains the documentation website for AuroraX, found at https://docs.aurorax.space. The site has information about AuroraX and its data, the API, client libraries for Python and IDL, and more.

## Installation

This documentation repository contains pages discussing AuroraX, and also API reference documentation for supporting client libraries (ie. Python packages). To generate these API reference pages, we use "submodules" to link other repositories. Currently only [PyAuroraX](https://github.com/aurorax-space/pyaurorax) is linked as a submodule.

To generate documentation for submodules. they must first be initialized and their dependencies installed. You can either use a makefile target we have, or initialize the submodule manually.

1. Clone repository

```console
git clone git@github.com:aurorax-space/docs.git
```

2. Initialize submodules

```console
make init
```

3. Submodules don't automatically update when changes are pushed to their upstream repositories, so updates must be pulled manually.

```console
git submodule foreach git pull
```

4. Build the documentation website locally. This will build the HTML files and assets into the ```site``` directory.

```console
make docs-build
```

5. The submodules in this repository are Python projects, and their API references are generated automatically using ```pdoc3```. This step generates HTML files in the ```docs/<submodule_name>``` directory.

```console
make docs-generate
```

6. Serve the website locally.

```console
make docs-serve
```

7. View the website at http://localhost:8000.


## How deployment works

Deployment is done using the MkDocs ```gh-deploy``` command. This step will build the docs, commit them to the ```gh-pages``` branch, and push the ```gh-pages``` branch to GitHub. __Please make sure to build and preview any changes locally first.__

## Editing pages

Markdown files used to generate the documentation are located in the ```docs``` directory. Add or edit existing documents directly in this directory.

The navigation menu is generated from the structure provided in the ```mkdocs.yml``` file. To modify the navigation menu, modify this file and rebuild the docs.


## Resources

- [MkDocs documentation](https://www.mkdocs.org/)
- [pdoc3](https://pdoc3.github.io/pdoc/doc/pdoc/)