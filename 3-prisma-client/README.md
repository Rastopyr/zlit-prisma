# setup

### create new project

run this command for create new project and choose generate typescript client

```bash
prisma init client-demo && cd client-demo
```

### export DB scheme and rename it

```bash
prisma introspect
mv datamodel*.prisma datamodel.prisma
```

### add `generate` field to `prisma.yml`

```yml
generate:
  - generator: typescript-client
    output: ./prisma-client/
```

### generate client again

```bash
prisma generate
```
