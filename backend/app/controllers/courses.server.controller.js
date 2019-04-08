const mongoose = require("mongoose");
const Course = mongoose.model("Courses");
const Registration = mongoose.model("Registrations");
const Student = mongoose.model("Students");
const passport = require("passport");


//
function getErrorMessage(err) {
  if (err.errors) {
    for (let errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return "Unknown server error";
  }
}

//
exports.render = function(req, res) {
  // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
  res.render("AddCourse", { title: "Creating a New Course" });
};
exports.renderDelete = function(req, res) {
  // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
  res.render("DeleteCourse", { title: "Delete a Course" });
};
exports.create = function(req, res) {
  const course = new Course(req.body);
  console.log(course);

  course.save(err => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      //res.status(200).json(course);
      return res.redirect("/");
    }
  });
};
//
exports.list = function(req, res) {
  Course.find({}, function(err, courses) {
    if (err) {
      // Call the next middleware with an error message
      return next(err);
    } else {
      // Use the 'response' object to send a JSON response
      res.status(200).json(courses);
      // res.render("CoursesList", {
      //   title: "List All Courses",
      //   courses: courses
      // });
    }
  });
};
//

exports.read = function(req, res, id) {
  Course.findById(req.course.id).exec((err, course) => {
    if (err) return next(err);
    if (!course) return next(new Error("Failed to load course " + id));
    res.status(200).json(course);
  });
};
//
exports.courseByID = function(req, res, next, id) {
  //Course.findById(id).populate('creator', 'firstName lastName fullName').exec((err, course) => {

  Course.findById(id).exec((err, course) => {
    if (err) return next(err);
    if (!course) return next(new Error("Failed to load course " + id));
    req.course = course;
    next();
  });
};
exports.courseBycourse = function(req, res, next, course) {
  //Course.findById(id).populate('creator', 'firstName lastName fullName').exec((err, course) => {

  const courseUpdate = new Course(course);
  Course.findById(courseUpdate.id).exec((err, course) => {
    if (err) return next(err);
    if (!course) return next(new Error("Failed to load course " + id));
    req.course = courseUpdate;
    next();
  });
};
exports.update = function(req, res) {
  const course = new Course(req.course);
  //course.title = req.body.title;
  //course.content = req.body.content;
  course.save(err => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.status(200).json(course);
    }
  });
};
//
exports.delete = function(req, res) {
  const course = new Course(req.course);
  console.log("course :", course);
  Registration.findOne({ course: course.id }, function(err, course2) {
    if (err) return getErrorMessage(err);
    if (course2)
      return getErrorMessage(
        new Error(
          "Course " +
            courseCode +
            " cannot be deleted. There is still enrollments."
        )
      ); 
    req.course = course;
  }).then(function() {
    // const course = new Course(req.course);
    course.remove(err => {
      if (err) {
        return res.status(400).send({
          message: getErrorMessage(err)
        });
      } else {
        res.status(200).json(course);
      }
    });
  });
};

//
//The hasAuthorization() middleware uses the req.course and req.user objects
//to verify that the current user is the creator of the current course
exports.hasAuthorization = function(req, res, next) {
  if (req.course.creator.id !== req.user.id) {
    return res.status(403).send({
      message: "User is not authorized"
    });
  }
  next();
};
