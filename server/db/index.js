const conn = require("./conn");
const Student = require("./Student");
const Campus = require("./Campus");
const Enrollment = require("./Enrollment");
const faker = require("faker");

Enrollment.belongsTo(Student);
Enrollment.belongsTo(Campus);

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  const students = new Array(7).fill("").map((_) => {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      imageUrl: faker.image.nature(),
      email: faker.internet.email(),
    };
  });

  const campuses = new Array(3).fill("").map((_) => {
    return {
      name: faker.name.jobType(),
    };
  });

  const [student1, student2, student3, student4, student5, student6, student7] =
    await Promise.all(students.map((name) => Student.create(name)));
  const [campus1, campus2, campus3] = await Promise.all(
    campuses.map((name) => Campus.create(name))
  );
  await Promise.all([
    Enrollment.create({ campusId: campus1.id, studentId: student1.id }),
    Enrollment.create({ campusId: campus2.id, studentId: student2.id }),
    Enrollment.create({ campusId: campus2.id, studentId: student3.id }),
    Enrollment.create({ campusId: campus1.id, studentId: student4.id }),
    Enrollment.create({ campusId: campus2.id, studentId: student5.id }),
    Enrollment.create({ campusId: campus3.id, studentId: student6.id }),
    Enrollment.create({ campusId: campus3.id, studentId: student7.id }),
  ]);
};

module.exports = {
  conn,
  syncAndSeed,
  Student,
  Campus,
};
