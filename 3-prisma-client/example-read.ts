import { prisma, Episode } from "./example-app/generated/prisma-client/index";

/*
 * Read Data from Prisma
 *
 * - Each method return Promise
 */

/*
  Fetch one record
*/
prisma.person({
  name: "Luke Skywalker"
});

/*
  Fetch list records
*/
prisma.persons({
  where: {
    isDroid: false
  },

  skip: 1,
  // last: 1,
  first: 10,
  orderBy: "id_ASC"
  // after: <some_id>
});

/*
  Fetch Luke with starships
*/
prisma
  .person({
    name: "Luke Skywalker"
  })
  .starships();

/*
  Selecting fields
*/
const fragment = `
fragment PersonFields on Person {
  id
  name
}
`;

prisma.persons().$fragment(fragment);

/*
  Filtering records
*/
prisma.persons({
  where: {
    name_in: ["Luke Skywalker", "Darth Vader"]
  }
});

prisma.persons({
  where: {
    AND: [
      {
        OR: [{ name: "C3-PO" }, { name: "R2-D2" }]
      },

      {
        OR: [{ name: "Han Solo" }, { name: "Chewbacca" }]
      }
    ]
  }
});

/*
  Relation filters on list
*/
prisma
  .person({
    name: "Luke Skywalker"
  })
  .starships({
    where: {
      speed_gte: 99
    }
  });

/*
  GraphQL fallback
*/
const query = `
query GetSWPersonByName($name: String) {
  person(where: { name: $name })
}
`;

const variables = { name: "Darth Vader" };
prisma.$graphql(query, variables);
