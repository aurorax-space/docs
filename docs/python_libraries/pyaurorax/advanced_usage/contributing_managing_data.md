# Contributing and Managing Data
PyAuroraX provides built-in functionality for data providers to upload and manage their organization's metadata and/or summary data to the AuroraX database. Please see the [AuroraX data policy](/about_the_data/policy/) page and review the [recommended standards](/about_the_data/standards/) before proceeding.

Data sources, data products, and ephemeris records can all be added to the AuroraX database and managed by AuroraX users.



## Account privilege levels
Contributing and managing data in AuroraX requires an account with special privileges. If you do not yet have an account, [sign up](https://aurorax.space/createAccount) and then [contact us](https://aurorax.space/more/contact) to request enhanced privileges.

There are four account types in AuroraX: 

* **User:** the default role upon account creation. The User role has no data creation, modification, or deletion privileges.
* **Maintainer:** can create and modify ephemeris and data product records associated with data sources they are assigned to. No data deletion privileges. Must be assigned to a data source by the Owner or an Administrator.
* **Owner:** can create and modify their owned data sources and any associated ephemeris and data product records. No data deletion privileges. This role must be assigned by an Administrator.
* **Administrator:** has full write and delete privileges. 


|  | User | Maintainer * | Owner | Administrator |
| - | :-: | :-: | :-: | :-: |
| Create data source | <font color="red"><font color="red">&#10007;</font></font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Update data source | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Delete data source | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> |
| Create ephemeris record | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Update ephemeris record **| <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Delete ephemeris record | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> |
| Create data product record | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Update data product record **| <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Delete data product record | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> |

\* Maintainers must be assigned to a data source by the Owner of the data source

\** Updating is done by re-uploading the modified record 

## Data sources
After obtaining sufficient privileges, the first step in uploading data to AuroraX is to create a data source. This data source will be associated with ephemeris and data product records in the database. In PyAuroraX the [`sources`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html) module has the [`DataSource`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource) class and the [`add`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.add) function to facilitate this.

### Adding a data source
The [`DataSource`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource) class is used to add data sources to AuroraX. Some of the class attributes are required to create the data source in the database, while others are optional and can be added later:

**Required attributes:**

* [`program`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.program)
* [`platform`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.platform)
* [`instrument_type`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.instrument_type)
* [`source_type`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.source_type)
* [`display_name`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.display_name)

**Optional attributes:**

* [`identifier`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.identifier) (will be assigned to the data source when it is created, if the number is not already in use, and cannot be changed later)
* [`metadata`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.metadata)
* [`maintainers`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.maintainers)
* [`ephemeris_metadata_schema`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.ephemeris_metadata_schema)
* [`data_product_metadata_schema`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataSource.data_product_metadata_schema)

### Example: adding a data source
In this example we add a data source using the required attributes along with the optional `metadata_schema_ephemeris` and `metadata_schema_data_products`.
```python hl_lines="44-45"
program = "example-program"
platform = "example-platform"
instrument_type = "example-instrument"
source_type = "ground"
display_name = "Example Instrument"
metadata_schema_ephemeris = [
    {
        "field_name": "example_meta1",
        "description": "example metadata field 1",
        "data_type": "string",
        "allowed_values": [],
    },
    {
        "field_name": "example_meta2",
        "description": "example metadata field 2",
        "data_type": "string",
        "allowed_values": [],
    }
]
metadata_schema_data_products = [
    {
        "field_name": "example_meta1",
        "description": "example metadata field 1",
        "data_type": "string",
        "allowed_values": [],
    },
    {
        "field_name": "example_meta2",
        "description": "example metadata field 2",
        "data_type": "string",
        "allowed_values": [],
    }
]

# make DataSource object 
source = aurorax.sources.DataSource(program=program,
                                    platform=platform,
                                    instrument_type=instrument_type,
                                    source_type=source_type, display_name=display_name,
                                    ephemeris_metadata_schema=metadata_schema_ephemeris,
                                    data_product_metadata_schema=metadata_schema_data_products)

# send to API
r = aurorax.sources.add(source)
identifier = r.identifier
```

When the adding operation is successful, the return value `r` from the API is a `DataSource` object. This object contains the full record from the database including default values for attributes we omitted. In this case, since we didn't specify an identifier, we can find out what identifier our new data source was assigned by accessing its `identifier` attribute.

### Updating a data source
There are two functions for updating the information associated with a data source in the AuroraX database: [`sources.partial_update`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.partial_update), which updates the values for specified attributes, and a full [`sources.update`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.update) function that replaces the database record with a new DataSource object passed in. We recommend using `sources.partial_update` whenever possible because it reduces the risk of accidental data loss.

### Example: partial update of a data source
In this example we perform partial updates to the data source `r` we created in the previous example. To use the [`sources.partial_update`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.partial_update) function we have to include the identifier of the data source, then any fields we want to modify. We will change the display name of the data source and add an existing AuroraX account as a maintainer.
```python
identifier = r.identifier
updated_r = aurorax.sources.partial_update(identifier=ds.identifier,
                                           display_name="New Display Name",
                                           maintainers=["maintainer@program.com"])
```

### Example: full update of a data source
The same task of modifying data source attributes can be accomplished with the [`sources.update`](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.update) function. The difference in using this function is that we must pass in a full `DataSource` as the argument, and this object must have the changes we wish to be made. 

Continuing with the example of adding a data source, `r`, we will update its display name and maintainers list. For the sake of completeness, let us retrieve the data source from the database first. Note that since `sources.update` will rewrite the database with the argument we pass in, it's important to retrieve our working data source with the `format="full_record"` option so that it contains all the information.
```python
ds = aurorax.sources.get(program="example-program",
                         platform="example-platform",
                         instrument_type="example-instrument",
                         format="full_record")

# update d's attributes
ds.display_name = "New Display Name"
ds.maintainers = ["maintainer@program.com"]

# send to API
updated_ds = aurorax.sources.update(ds)
```