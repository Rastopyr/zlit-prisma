# Prisma intro

## Components

- [prisma.yml](#prisma-yml)
- [datamodel.yml](#*-prisma)
- [docker-compose.yml](#docker-compose-yml)

### prisma.yml

- is main configuration file
- contain link or links to data model `.prisma` file(s)
- contain link to prisma server host
- database type
- secret for prisma access
- hooks for trigger actions in prisma-cli lifecycle
- seed command

### \*.prisma

- schema of database
- contain all type defintions(types, fields, etc.)
- contain all metadata for types(relations, indexes, etc.)

### docker-compose.yml(optional)

config file for prisma and db(postgres) docker container
