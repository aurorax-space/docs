# Installation

PyAuroraX and IDL-AuroraX libraries require developers to do a few steps to install the code. Below, we'll go over those steps. You can also find this information on the README pages for each respective code repository on Github.

## PyAuroraX

You can install PyAuroraX using pip, and import it like so:

```
$ pip install pyaurorax
$ python
>>> import pyaurorax
>>> aurorax = pyaurorax.PyAuroraX()
```

More installation details can be found on the readme of the code repository [on Github](https://github.com/aurorax-space/pyaurorax).

## IDL-AuroraX

Since IDL 8.7.1, there exists an IDL package manager called [ipm](https://www.l3harrisgeospatial.com/docs/ipm.html#INSTALL). We can use this to install the IDL-AuroraX library with a single command. 

This is the recommended way of installing the IDL-AuroraX library, but, refer to the [Github repository README file](https://github.com/aurorax-space/idl-aurorax) for additional installation methods.

1. From the IDL command prompt, run the following:

    ```idl
    IDL> ipm,/install,'https://data.aurorax.space/data/software/idl-aurorax/latest.zip'
    ```

2. Add the following to your startup file, or run the command manually using the IDL command prompt:

    ```
    [ open your startup.pro file and put the following in it ]
    @aurorax_startup
    ```

3. [OPTIONAL] If you added the above line to your startup file, you must reset your IDL session. Do this by either clicking the Reset button in the IDL editor or by typing `.reset` into the IDL command prompt.

For further information, you can view what packages are installed using `ipm,/list`. You can also view the package details using `ipm,/query,'idl-aurorax'`.
