# GEO Knowledge Hub Documentation

[![License](https://img.shields.io/github/license/geo-knowledge-hub/geo-knowledge-hub-docs.svg)](https://github.com/geo-knowledge-hub/geo-knowledge-hub-docs/blob/master/LICENSE)
[![lifecycle](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
[![License](https://img.shields.io/discord/730739436551143514?logo=discord&logoColor=ffffff&color=7389D8)](https://discord.com/channels/730739436551143514#)

This repository contains the source code for the GEO Knowledge Hub User's and Developer's Documentation pages.

### Generating the Documentation

1. Clone the documentation repository:

```shell
git clone https://github.com/geo-knowledge-hub/geo-knowledge-hub-docs.git
```

2. Go to the source code directory:

```shell
cd geo-knowledge-hub-docs
```

3. Install the required JavaScript libraries:

```shell
yarn
```

4. Build the documentation

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### Local Development

```shell
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
