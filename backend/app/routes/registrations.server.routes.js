// Load the 'students' controller
const registrations = require("../controllers/registrations.server.controller");
// const courses = require("../controllers/courses.server.controller");
// const students = require("../controllers/students.server.controller");
// const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {
  app.route("/api/enrollments").get(registrations.list);
  // app.route("/api/enrollment/:id").get(registrations.read);
  app.route("/api/enrollment/by_student").get(registrations.registrationsByStudent);
  app.route("/api/enrollment/by_course/:courseId").get(registrations.registrationsByCourse);
  app.route("/api/enrollment/").post(registrations.create);
  app.route("/api/enrollment/:id").put(registrations.update);
  app.route("/api/enrollment/:id").delete(registrations.delete);
  //app.param("id", registrations.registrationByID);

    
    // // app.route("/listRegistrationByStudent")
    // // app.route("/listRegistrationByregistration")
    // app.route("/createRegistration")
    // .get(registrations.render)
    // .post(registrations.create);

    // app.route("/deleteRegistration")
    // .post(registrations.delete);

    // app
    //   .route("/registrationsByCourse2")
    //   .get(registrations.renderRegistratioByCourseCode);

    //   app.route("/registrationsByCourse")
    //     .post(registrations.registrationsByCourse);
    // //app.param("courseCode", registrations.findCourseIdByCourseCode);

    // // app.route("/deleteRegistrationByStudent")
    // //     .delete();
    // // app.route("/deleteRegistrationByCourse")
    // //     .delete();

    // // app.route("/deleteRegistration").delete();
    // // app.route("/updateRegistration").post();
    // // app.route("/deleteCourse/:courseCode").get(courses.StudentsByCourseCode);
};


