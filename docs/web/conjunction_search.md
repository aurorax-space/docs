# Conjunction Search

The AuroraX Conjunction Search engine is a tool for finding conjunctions between ground-based ASIs and space-based instruments. It helps researchers streamline the process of "event discovery", quickly narrowing down the possible times that may contain interesting data.

## How can I use it?

The Conjunction Search is available in several different forms:

* Using the [AuroraX website](https://aurorax.space/conjunctionSearch/standard){:target="_blank"}
* Using the AuroraX website's [expert mode](https://aurorax.space/conjunctionSearch/expert){:target="_blank"} 
* Programmatically using the HTTPS-based RESTful API or PyAuroraX

## What are conjunctions?

The most simplistic definition of a conjunction is a time when two things are close to each other. For AuroraX, we further define it as **when the magnetic footprints of two data sources are within a certain distance for a given minute**.

The set of data sources can be ground-based instrumentation, spacecrafts, or instruments operating onboard certain spacecrafts. We can easily illustrate this using a screenshot from the Swarm-Aurora Conjunction Browser, seen below. This is an example of a conjunction where the magnetic footprints of two spacecrafts - Swarm A and Swarm C in this case - passed through the field of view (FoV) of several ASIs in Fort Smith, NWT, Canada (which were collecting data at the time).

<figure>
  <img src="/_extras/img/swarmaurora_example_conjunction2.png" />
  <figcaption>Example of a conjunction between two satellites and several ground-based ASIs (Swarm A, Swarm C, and Fort Smith in this case)</figcaption>
</figure>

A differentiating factor of AuroraX "conjunction" searching from other systems available (ie. NASA's SSCWeb) is that the AuroraX database **only** contains data for when instruments collected data. This removes all the possibilities where the spacecraft could have passed through the FoV, but, the ASI didn't collect any data. The key benefit of this data architecture is that "event discovery" processes are much faster and significantly less labour-intensive.

## Introduction to using the conjunction search

In the "Getting Started" section of this documentation website, we have a few pages devoted to helping users get a bit more familiar with the AuroraX Conjunction Search engine.

[Get started with conjunction searching&nbsp;&nbsp;:fontawesome-solid-long-arrow-alt-right:](/getting_started/searching_conjunctions){.md-button}
