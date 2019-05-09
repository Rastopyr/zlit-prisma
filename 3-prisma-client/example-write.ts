import {
  prisma,
  Gender,
  Long
} from "./example-app/generated/prisma-client/index";

/*
 * Write Data to Prisma
 *
 * - Each method return Promise
 * - SQL databases support transactions
 * - MongoDB not support transactions
 */

/*
  Create Person record in Database.
*/
prisma.createPerson({
  name: "Luke Skywalker"
});

/*
  Update Person 
*/
prisma.updatePerson({
  data: {
    gender: "MALE"
  },

  where: {
    // id: <Luke ID>
    name: "Luke Skywalker"
  }
});

/*
  Update many persons and get count of updated persons
*/
(async () => {
  // Long is string type
  const updatedCount: Long = await prisma
    .updateManyPersons({
      where: {
        name_in: ["Luke Skywalker", "Obi-Wan Kenobi"]
      },
      data: { isDroid: false }
    })
    .count();

  console.log({
    updatedCount
  });
})();

/*
  Delete Person
*/
prisma.deletePerson({
  where: {
    // id: <Luke ID>
    name: "Luke Skywalker"
  }
});

/*
  Delete many Persons
*/
prisma.deleteManyPersons({
  where: {
    name_in: ["Obi-Wan Kenobi"]
  }
});

/*
  
  Create Planet and create Droid and attach him to Planet
*/
prisma.createPerson({
  name: "C3-PO",
  isDroid: true,

  planet: {
    create: {
      name: "Tatooine",
      mass: 80000000
    }
  }
});

/*
  Create starships and then create Luke and attach him to starships
*/
prisma.createPerson({
  name: "Luke Skywalker",
  isDroid: false,

  planet: {
    connect: {
      name: "Tatooine"
    }
  },

  starships: {
    create: [
      {
        name: "X-wing"
      },

      {
        name: "Imperial shuttle"
      }
    ]
  }
});
