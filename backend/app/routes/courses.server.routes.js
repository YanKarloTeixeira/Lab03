// Load the 'students' controller
const courses = require("../../app/controllers/courses.server.controller");
const passport = require("passport");

// Define the routes module' method
module.exports = function(app) {
  app
    .route("/createCourse")
    .get(courses.render)
    .post(courses.create);

  app.route("/listCourses").get(courses.list);

  app.route("/readCourse").post(courses.read);
  app.route("/updateCourse").put(courses.update);
  //app.param("courseCode", courses.courseByCourseCode);

  app
    .route("/deleteCourse")
    .get(courses.renderDelete)
    .post(courses.delete);

  app.route("/api/course").get(courses.list);
  app.route("/api/course/:id").get(courses.read);
  app.route("/api/course/:course").post(courses.create);
  app.route("/api/course/:course").put(courses.update);
  app.route("/api/course/:id").delete(courses.delete);
  app.param("id", courses.courseByID);
  app.param("course", courses.courseBycourse);
};
