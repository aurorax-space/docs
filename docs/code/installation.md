# Installation

PyAuroraX and IDL-AuroraX libraries require developers to do a few steps to install the code. Below, we'll go over those steps. You can also find this information on the README pages for each respective code repository on Github.

## PyAuroraX

You can install PyAuroraX using pip, and import it like so:

```
$ pip install pyaurorax
$ python
>>> import pyaurorax
```

More installation details can be found on the readme of the code repository [on Github](https://github.com/aurorax-space/pyaurorax){:target="_blank"}.

## IDL-AuroraX

You can install IDL-AuroraX using the `ipm` IDL command, like so:

```
IDL> ipm,/install,'https://data.aurorax.space/data/software/idl-aurorax/latest.zip'
```

Then, you'll need to include the following in your startup file:

```
.run aurorax_startup
```