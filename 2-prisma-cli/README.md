## Commands

### prisma init

```bash
prisma init cli-demo
```

- scaffold configuration files for new Prisma service(`prisma.yml`,
  `datamodel.prisma`)

### prisma instrospect

```bash
prisma introspect
```

- allow export scheme of existing Prisma database to SDL

### prisma deploy

```bash
prisma introspect
```

- initiate deploy of schema to prisma server
- seed data if `seed` process is configured
- pass flags to command change deploy behavior(see `prisma help deploy`)

### prisma generate

```bash
prisma generate
```

- generate client library based on `datamodel.prisma`
- can generate `js`, `ts`, `flow`, `go` clients
- can generate graphql schema based on `datamodel.prisma`
