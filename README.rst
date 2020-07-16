..
    This file is part of GEO Knowledge Hub Documentation.
    Copyright 2020 GEO.

    GEO Knowledge Hub is free software; you can redistribute it and/or modify it
    under the terms of the MIT License; see LICENSE file for more details.


`geo-knowledge-hub.github.io <https://geo-knowledge-hub.github.io>`_
====================================================================


.. image:: https://img.shields.io/github/license/geosec/docs-geo-knowldege-hub.svg
        :target: https://github.com/geosec/docs-geo-knowldege-hub/blob/master/LICENSE
        :alt: Software License

.. image:: https://img.shields.io/badge/lifecycle-experimental-orange.svg
        :target: https://www.tidyverse.org/lifecycle/#experimental
        :alt: Software Life Cycle


.. image:: https://img.shields.io/discord/730739436551143514?logo=discord&logoColor=ffffff&color=7389D8
        :target: https://discord.com/channels/730739436551143514#
        :alt: Join us at Discord


About
-----


This repository contains the source code for the GEO Knowledge Hub User's and Developer's Documentation Web Site: `https://geo-knowledge-hub.github.io <https://geo-knowledge-hub.github.io>`_.


Generating the Documentation
----------------------------


**1.** Clone the documentation repository:


.. code-block:: shell

    git clone https://github.com/geosec/docs-geo-knowledge-hub.git


**2.** Go to the source code folder:


.. code-block:: shell

    cd docs-geo-knowledge-hub


**3.** Install the required Python libraries::


.. code-block:: shell

    pip3 install -r requirements.txt


or:


.. code-block:: shell

    pip3 install sphinx sphinx_rtd_theme sphinx-copybutton sphinx-tabs


or, if you prefer the ``Anaconda`` distribution:


.. code-block:: shell

    conda install sphinx sphinx_rtd_theme sphinx-copybutton sphinx-tabs


**4.** In order to build the HTML documentation, please, go to the ``docs`` folder:


.. code-block:: shell

    cd docs


**5.** Build the HTML documentation with the ``make html`` command:


.. code-block:: shell

    make html


The above command will generate the HTML documentation under the ``_build/html`` folder. You can open the ``index.html`` file in order to navigate in the documentation.


.. code-block:: shell

    firefox _build/html/index.html


.. note::

    In order to clean the sites directory, and remove staled files, you can use the following command:


    .. code-block:: shell

        make clean