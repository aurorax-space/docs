# Interact with Swarm-Aurora

Swarm-Aurora can be a very helpful tool for exploring conjunction searches and evaluating data to see if it's of scientific interest. To help visualize conjunction searches performed using IDL-AuroraX, you can use several procedures to interact with Swarm-Aurora. Below, we'll have a closer look at what's possible.

## Open Conjunction Search in Swarm-Aurora

!!! example "Example - open conjunction search in Swarm-Aurora"

    This is an example of a simple conjunction search and different ways of opening it in Swarm-Aurora.

    === "Python"

        Using the [`search.conjunctions.swarmaurora`](/code/pyaurorax_api_reference/pyaurorax/search/conjunctions/swarmaurora/){:target="_blank"} submodule, you can open a conjunction search in Swarm-Aurora using a single line of Python code. This procedure uses Python's built-in [`webbrowser`](https://docs.python.org/3/library/webbrowser.html){:target="_blank"} module to launch a browser tab, with Swarm-Aurora loaded in it.

        PyAuroraX supports two ways of opening conjunction searches in Swarm-Aurora:

        1. Automatically opening in a browser
        2. By providing a URL for you to copy into your preferred browser manually

        To start, we'll do a simple conjunction search and then explore each of the three options.

        ```python
        # imports
        import datetime
        import pyaurorax
        aurorax = pyaurorax.PyAuroraX()

        # define search parameters
        start = datetime.datetime(2019, 1, 1, 0, 0, 0)
        end = datetime.datetime(2019, 1, 3, 23, 59, 59)
        ground_params = [
            {
                "programs": ["themis-asi"],
                "platforms": ["fort smith", "gillam"],
            }
        ]
        space_params = [
            {
                "programs": ["swarm"],
                "hemisphere": ["northern"],
            }
        ]
        distance = 500

        # run conjunction search request
        s = aurorax.search.conjunctions.search(start=start,
                                               end=end,
                                               distance=distance,
                                               ground=ground_params,
                                               space=space_params,
                                               verbose=True)
        ```

        With the search now done and saved to the `s` variable, we can either open the results automatically in a browser:

        ```python
        aurorax.search.conjunctions.swarmaurora.open_in_browser(s)
        ```

        Or, output the URL so you can copy and paste it into your preferred browser manually.

        ```python
        print(aurorax.search.conjunctions.swarmaurora.get_url(s))
        ```

        If you run into issues with the default browser, or just want to use a different one, you can set the `browser` parameter to one of the supported browsers from the Python library. To view all browser options, refer to the table [here](https://docs.python.org/3/library/webbrowser.html#webbrowser.get). For example `pyaurorax.search.conjunctions.swarmaurora.open_in_browser(s, browser='google-chrome')`.

    === "IDL"
        Using the [`aurorax_open_conjunctions_in_swarmaurora`](/code/idlaurorax_api_reference/search/conjunctions/open_in_swarmaurora/){:target="_blank"} procedure, you can open a conjunction search in Swarm-Aurora using a single IDL command. This procedure uses IDL's `widget_browser()` function to render a window that is a functional browser, with Swarm-Aurora loaded in it.

        !!! danger "Bug in IDL 8.8.1 and earlier"

            Please note, there exists a bug in IDL versions 8.8.1 and lower for computers using a UHD or 4K screens (resolution larger than 1920x1080). When using the command `aurorax_open_conjunctions_in_swarmaurora` to open a browser window, the window that launches doesn't work quite right. IDL version 8.8.2 has resolved this bug.

        IDL-AuroraX supports three ways of opening conjunction searches in Swarm-Aurora:

        1. Automatically opening in an IDL-based browser window
        2. By providing a URL for you to copy into your preferred browser manually
        3. By copying a URL to your clipboard that can be then pasted into your preferred browser manually

        To start, we'll do a simple conjunction search and then explore each of the three options.

        ```idl
        distance = 500
        start_dt = '2019-01-01T00:00:00'
        end_dt = '2019-01-03T23:59:59'
        ground1 = aurorax_create_criteria_block(programs=['themis-asi'],platforms=['fort smith', 'gillam'],/GROUND)
        ground = list(ground1)
        space1 = aurorax_create_criteria_block(programs=['swarm'],hemisphere=['northern'],/SPACE)
        space = list(space1)
        response = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space,/NBTRACE)
        ```

        First off, we can open an IDL-based browser window using a single command.

        ```idl
        IDL> aurorax_open_conjunctions_in_swarmaurora,response.request_id
        ```

        Second, we can print out a URL that can be copied into your preferred browser, such as Chrome.

        ```idl
        IDL> aurorax_open_conjunctions_in_swarmaurora,response.request_id,/print_url
        ```

        Lastly, we can have IDL copy that URL to the clipboard for us.

        ```idl
        IDL> aurorax_open_conjunctions_in_swarmaurora,response.request.id,/clipboard
        ```

    === "Command Line"

        Using the `--swarmaurora-open-in-browser` and `--swarmaurora-show-url` parameters, you can also interact with Swarm-Aurora using the command line.

        First, we'll set up our search in a separate JSON file, then run the `aurorax-cli` command with a few parameters.

        Filename: **conjunction_search.json**
        ```json
        {
          "start": "2019-01-01T00:00:00",
          "end": "2019-01-03T23:59:59",
          "conjunction_types": ["nbtrace"],
          "ground": [
            {
              "programs": ["themis-asi"],
              "platforms": ["fort smith", "gillam"],
              "instrument_types": ["panchromatic ASI"],
              "ephemeris_metadata_filters": {}
            }
          ],
          "space": [
            {
              "programs": ["swarm"],
              "platforms": [],
              "instrument_types": ["footprint"],
              "ephemeris_metadata_filters": {},
              "hemisphere": ["northern"]
            }
          ],
          "events": [],
          "max_distances": {"ground1-space1": 500}
        }
        ```

        Now, you can use the command line to run the search and interact with Swarm-Aurora in a few different ways.

        ```console
        $ aurorax-cli conjunctions search conjunction_search.json --swarmaurora-open-browser
        ```

        If you want to open it in a different browser from your system's default, you can use the `--swarmaurora-browser-type` parameter to specify it.

        ```console
        $ aurorax-cli conjunctions search conjunction_search.json --swarmaurora-open-browser --swarmaurora-browser-type=firefox`
        ```

        Alternatively you can only output the URL for Swarm-Aurora and the run conjunction search, so that you can manually copy and paste it into your preferred browser:

        ```console
        $ aurorax-cli conjunctions search conjunction_search.json --swarmaurora-show-url
        ```

## Download Swarm-Aurora custom import file

!!! example "Example - download Swarm-Aurora custom import file"

    This is an example of a simple conjunction search and then downloading the corresponding Swarm-Aurora custom import file.

    === "Python"

        Using the [`conjunctions.swarmaurora`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/swarmaurora/){:target="_blank"} submodule, you can download the Swarm-Aurora custom import file in a single line of Python code. This file can then be shared easily with others, and imported to the Swarm-Aurora Conjunction Finder interface.

        To start, we'll do a simple conjunction search and then explore each of the three options.

        ```python
        # imports
        import pyaurorax
        import datetime

        # define search parameters
        start = datetime.datetime(2019, 1, 1, 0, 0, 0)
        end = datetime.datetime(2019, 1, 3, 23, 59, 59)
        ground_params = [
            {
                "programs": ["themis-asi"],
                "platforms": ["fort smith", "gillam"],
            }
        ]
        space_params = [
            {
                "programs": ["swarm"],
                "hemisphere": ["northern"],
            }
        ]
        distance = 500

        # run conjunction search request
        s = pyaurorax.conjunctions.search(start=start,
                                          end=end,
                                          distance=distance,
                                          ground=ground_params,
                                          space=space_params,
                                          verbose=True)
        ```

        With the search now done and saved to the `s` variable, we can save the search as a Swarm-Aurora custom import file:

        ```python
        filename = pyaurorax.conjunctions.swarmaurora.create_custom_import_file(s)
        print(filename)
        ```

        This saves the file to a default output file. Alternatively, you can specify the output filename yourself.

        ```python
        filename = pyaurorax.conjunctions.swarmaurora.create_custom_import_file(s, filename="/tmp/swarmaurora_custom_import.json")
        print(filename)
        ```

        Lastly, instead of saving to a file, you can get the custom import file contents and store it into a dictionary variable. Use the `returnDict` parameter to do this, like so:

        ```
        custom_import_dict = pyaurorax.conjunctions.swarmaurora.create_custom_import_file(s, returnDict=True)
        print(custom_import_dict)
        ```

    === "IDL"

        Using the [`aurorax_save_swarmaurora_custom_import_file`](/code/idlaurorax_api_reference/search/conjunctions/save_swarmaurora_import_file/){:target="_blank"} procedure, you can download a Swarm-Aurora "custom import" JSON file. This file can be then shared with others or manually loaded into Swarm-Aurora.

        To start, we'll do a simple conjunction search.

        ```idl
        distance = 500
        start_dt = '2019-01-01T00:00:00'
        end_dt = '2019-01-03T23:59:59'
        ground1 = aurorax_create_criteria_block(programs=['themis-asi'],platforms=['fort smith', 'gillam'],/GROUND)
        ground = list(ground1)
        space1 = aurorax_create_criteria_block(programs=['swarm'],hemisphere=['northern'],/SPACE)
        space = list(space1)
        response = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space,/NBTRACE)
        ```

        Now that we have a search completed, we can ask Swarm-Aurora for the custom import file and save it to disk.

        ```idl
        IDL> aurorax_save_swarmaurora_custom_import_file,response.request_id
        ```

        The output from that command would look like:

        ```
        [Tue Mar 08 20:43:48 2022] Retrieving custom import file contents from Swarm-Aurora ...
        [Tue Mar 08 20:43:48 2022] Writing custom import file to disk ...
        [Tue Mar 08 20:43:48 2022] Finished, file saved to C:\Users\someuser\swarmaurora_custom_import_4b0b6845-7b54-4a47-ab70-96d338f47167.json
        ```

        If you want to specify the exact filename to save the JSON file to, then supply the `filename` parameter.

        ```idl
        IDL> aurorax_save_swarmaurora_custom_import_file,response.request_id,filename='C:\my_swarmaurora_custom_import_file.json'
        ```

    === "Command Line"

        Using the `--swarmaurora-save-custom-import-file` parameter, you can perform a conjunction search and save the Swarm-Aurora custom import file too.

        First, we'll set up our search in a separate JSON file, then run the `aurorax-cli` command with a few parameters.

        Filename: **conjunction_search.json**
        ```json
        {
          "start": "2019-01-01T00:00:00",
          "end": "2019-01-03T23:59:59",
          "conjunction_types": ["nbtrace"],
          "ground": [
            {
              "programs": ["themis-asi"],
              "platforms": ["fort smith", "gillam"],
              "instrument_types": ["panchromatic ASI"],
              "ephemeris_metadata_filters": {}
            }
          ],
          "space": [
            {
              "programs": ["swarm"],
              "platforms": [],
              "instrument_types": ["footprint"],
              "ephemeris_metadata_filters": {},
              "hemisphere": ["northern"]
            }
          ],
          "events": [],
          "max_distances": {"ground1-space1": 500}
        }
        ```

        Now, you can use the command line to run the search and interact with Swarm-Aurora in a few different ways.

        ```console
        $ aurorax-cli conjunctions search conjunction_search.json --swarmaurora-save-custom-import-file
        ```
