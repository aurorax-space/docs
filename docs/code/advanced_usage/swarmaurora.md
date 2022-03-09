# Interact with Swarm-Aurora

Swarm-Aurora can be a very helpful tool for exploring conjunction searches and evaluating data to see if it's of scientific interest. To help visualize conjunction searches performed using IDL-AuroraX, you can use several procedures to interact with Swarm-Aurora. Below, we'll have a closer look at what's possible.

!!! warning "Currently only using IDL-AuroraX"

    Currently, interacting with Swarm-Aurora can only be done with IDL-AuroraX. We are working on features in PyAuroraX and will be part of the [v0.10.0 release](https://github.com/aurorax-space/pyaurorax/milestone/3){:target="_blank"}.

## Open Conjunction Search in Swarm-Aurora

Using the [`aurorax_open_conjunctions_in_swarmaurora`](/code/idlaurorax_api_reference/conjunctions/open_in_swarmaurora/){:target="_blank"} procedure, you can open a conjunction search in Swarm-Aurora using a single IDL command. This procedure uses IDL's `widget_browser()` function to render a window that is a functional browser, with Swarm-Aurora loaded in it.

!!! example "Example - open conjunction search in Swarm-Aurora"

    This is an example of a simple conjunction search and different ways of opening it in Swarm-Aurora.

    === "IDL"

        IDL supports three ways of opening conjunction searches in Swarm-Aurora:

        1. In an IDL-based browser window
        2. By providing a URL for you to copy into your preferred browser
        3. By copying a URL to your clipboard that can be then pasted into your preferred browser

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

        First off, we can open and IDL-based browser window using a single command.

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

## Download Swarm-Aurora custom import file

Using the [`aurorax_save_swarmaurora_custom_import_file`](/code/idlaurorax_api_reference/conjunctions/save_swarmaurora_import_file/){:target="_blank"} procedure, you can download a Swarm-Aurora "custom import" JSON file. This file can be then shared with others or manually loaded into Swarm-Aurora.

!!! example "Example - download Swarm-Aurora custom import file"

    This is an example of a simple conjunction search and then downloading the corresponding Swarm-Aurora custom import file.

    === "IDL"

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
