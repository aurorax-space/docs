# Interacting Programmatically with AuroraX

Under-the-hood, AuroraX is programmatic by nature. It is built on top of a database and a HTTPS-based RESTful APIs. All webpages and other tools we have available are built on top of the APIs to provide more human-friendly or robust interfaces (webpages, client libraries).

Below, we'll have a look at what's available to use if you want to programmatically interact with the platform.

## Programmatic methods

There are four main ways of interacting with AuroraX programmatically:

1. Making raw HTTP/HTTPS requests to the RESTful APIs
2. Writing Python code with [PyAuroraX](https://github.com/aurorax-space/pyaurorax){:target="_blank"}
3. Using the command line with aurorax-cli (part of PyAuroraX)
4. Writing IDL code with [IDL-AuroraX](https://github.com/aurorax-space/idl-aurorax){:target="_blank"}

Below, we'll introduce you to each and discuss the tools available.

## Making raw HTTP/HTTPS requests to the RESTful APIs

Since AuroraX operates as a HTTPS-based RESTful API, you can interact with it using any number of programming languages. You can use command line tools like wget and curl, build a web application that sends requests using JavaScript, or write programs that send HTTPS requests (ie. Python's requests or urllib3 libraries).

The API provides a basic interactive website for documenting and running endpoints:

- [Interactive Swagger API documentation](https://api.aurorax.space){:target="_blank"}

## Writing Python code with PyAuroraX

AuroraX provides a Python library to make life easier for application development. The software can be found on Github, and the API reference documentation can be found on this documentation website.

- [PyAuroraX code repository](https://github.com/aurorax-space/pyaurorax){:target="_blank"}
- [PyAuroraX API reference documentation](/code/pyaurorax_api_reference/pyaurorax/)

You can install it and import it like so:

```
$ pip install pyaurorax
$ python
>>> import pyaurorax
>>> sources = pyaurorax.sources.list(program="swarm")
```

??? abstract "Click to view the output of the above pyaurorax function call"

    Below is the `sources` variable from the `pyaurorax.sources.list()` function when the program is set to "swarm".

    ```python
    >>> import pyaurorax
    >>> import pprint
    >>> sources = pyaurorax.sources.list(program="swarm")
    >>> pprint.pprint(sources)
    [
      DataSource(identifier=3, program='swarm', platform='swarma', instrument_type='footprint', source_type='leo', display_name='Swarm A', metadata={}, owner='dchaddoc@ucalgary.ca', maintainers=[], ephemeris_metadata_schema=[{'field_name': 'nbt...}], data_product_metadata_schema=[]),
      DataSource(identifier=29, program='swarm', platform='swarmb', instrument_type='footprint', source_type='leo', display_name='Swarm B', metadata={}, owner='dchaddoc@ucalgary.ca', maintainers=[], ephemeris_metadata_schema=[{'field_name': 'nbt...}], data_product_metadata_schema=[]),
      DataSource(identifier=30, program='swarm', platform='swarmc', instrument_type='footprint', source_type='leo', display_name='Swarm C', metadata={}, owner='dchaddoc@ucalgary.ca', maintainers=[], ephemeris_metadata_schema=[{'field_name': 'nbt...}], data_product_metadata_schema=[])
    ]
    ```

More details on installation can be found [here](https://github.com/aurorax-space/pyaurorax){:target="_blank"}.

## Using the command line with aurorax-cli

If you only need to interact with AuroraX from the command line, you can use the `aurorax-cli` program that is bundled with the PyAuroraX library. The software is part of the PyAuroraX repository and can be found [here on Github](https://github.com/aurorax-space/pyaurorax){:target="_blank"}.

After installing the PyAuroraX library, you can view the usage information by typing:

```
$ aurorax-cli --help
$ aurorax-cli sources list --program=swarm
Identifier ↓   Display Name   Program   Platform   Instrument Type   Source Type
================================================================================
3              Swarm A        swarm     swarma     footprint         leo        
29             Swarm B        swarm     swarmb     footprint         leo        
30             Swarm C        swarm     swarmc     footprint         leo        
```

## Writing IDL code with IDL-AuroraX

AuroraX provides an IDL library for retrieving data from the platform, and performing conjunction searches. The software can be found on Github, and the API reference documentation can be found on this documentation website.

- [IDL-AuroraX code repository](https://github.com/aurorax-space/idl-aurorax){:target="_blank"}
- [IDL-AuroraX API reference documentation](/code/idlaurorax_api_reference/overview)

You can install it and use it like so:

```idl
IDL> ipm,/install,'https://data.aurorax.space/data/software/idl-aurorax/latest.zip'
[ add several .run commands to your startup file (see Github README) ]
IDL> sources = aurorax_sources_list(program='swarm')
```

??? abstract "Click to view the output of the above idl-aurorax function call"

    Below is the `sources` variable from the `aurorax_sources_list()` function when the program is set to "swarm".

    ```idl
    IDL> sources = aurorax_sources_list(program='swarm')
    IDL> help,sources
    SOURCES        LIST  <ID=2158  NELEMENTS=3>
    IDL> help,sources[0]
    ** Structure <69a1b2d0>, 6 tags, length=88, data length=88, refs=2:
       IDENTIFIER      LONG64                         3
       PROGRAM         STRING    'swarm'
       PLATFORM        STRING    'swarma'
       INSTRUMENT_TYPE STRING    'footprint'
       SOURCE_TYPE     STRING    'leo'
       DISPLAY_NAME    STRING    'Swarm A'
    IDL> help,sources[1]
    ** Structure <69a1b890>, 6 tags, length=88, data length=88, refs=2:
       IDENTIFIER      LONG64                        29
       PROGRAM         STRING    'swarm'
       PLATFORM        STRING    'swarmb'
       INSTRUMENT_TYPE STRING    'footprint'
       SOURCE_TYPE     STRING    'leo'
       DISPLAY_NAME    STRING    'Swarm B'
    IDL> help,sources[2]
    ** Structure <69a1cf90>, 6 tags, length=88, data length=88, refs=2:
       IDENTIFIER      LONG64                        30
       PROGRAM         STRING    'swarm'
       PLATFORM        STRING    'swarmc'
       INSTRUMENT_TYPE STRING    'footprint'
       SOURCE_TYPE     STRING    'leo'
       DISPLAY_NAME    STRING    'Swarm C'
    ```

More details on installation can be found [here](https://github.com/aurorax-space/idl-aurorax){:target="_blank"}.

## All done!

That's a wrap for the introduction to the AuroraX platform. This documentation website has more technical details about different aspects of AuroraX data and resources, so be sure to check them out as needed.
