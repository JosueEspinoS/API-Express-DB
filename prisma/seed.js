const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const explorer1 = await prisma.explorer.upsert({
        where: { name: 'Josue' },
        update: {},
        create: {
            name: 'Josue',
            username: 'explorerJosue',
            mission: 'node'
        },
    });

    const explorer2 = await prisma.explorer.upsert({
        where: {name: 'Pepe'},
        update: {},
        create: {
            name: 'Pepe',
            username: 'explorerPepe',
            mission: 'Node'
        },
    });

    const alumno = await prisma.alumno.upsert({
      where: {name: 'Luis'},
      update: {},
      create:{
        name: 'Luis',
        lang:'Español',
        missionComander: 'Carlo',
        enrollments: 3,
        hasCertification: true
      }
    });

    const alumno2 = await prisma.alumno.upsert({
      where: {name: 'Miguel'},
      update: {},
      create:{
        name: 'Miguel',
        lang:'Español',
        missionComander: 'Carlo',
        enrollments: 3
      }
    });

    const alumno3 = await prisma.alumno.upsert({
      where: {name: 'Gerardo'},
      update: {},
      create:{
        name: 'Gerardo',
        lang:'inglés',
        missionComander: 'Carlo',
        enrollments: 3
      }
    });
    

    console.log('Create 9 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();