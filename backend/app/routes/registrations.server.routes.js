// Load the 'students' controller
const registrations = require("../controllers/registrations.server.controller");
const students = require("../controllers/students.server.controller");
// const courses = require("../controllers/courses.server.controller");
const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {
  app.route("/api/enrollments").get(registrations.list);
  app.route("/api/enrollment/:id").get(registrations.read);
  app.route("/api/enrollment/by-student/:studentNumber").get(registrations.registrationsByStudent);
  app.route("/api/enrollment/by-course/:courseId").get(registrations.registrationsByCourse);
  app.route("/api/enrollment/").post(registrations.create);
  app.route("/api/enrollment/:id").put(registrations.update);
  app.route("/api/enrollment/:id").delete(registrations.delete);
  
  // app.param("studentNumber", students.studentByStudentNumber);
};


