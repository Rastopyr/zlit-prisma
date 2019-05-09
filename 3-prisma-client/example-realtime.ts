const { GraphQLServer } = require("graphql-yoga");
import { prisma } from "./example-app/generated/prisma-client/index";

/*
 * Subscribe to events from Prisma
 * Return async iterator for any resolver
 */

const result = prisma.$subscribe
  .person({
    node: {
      name_starts_with: "Luke"
    },
    mutation_in: ["CREATED", "UPDATED"]
  })
  .node();

result.then(async (i) => {
  const { value } = await i.next();

  console.log(value);
});

setTimeout(async () => {
  await prisma.createPerson({
    name: `Luke ${Date.now()}`
  });

  await prisma.createPerson({
    name: `Leia ${Date.now()}`
  });
}, 100);
