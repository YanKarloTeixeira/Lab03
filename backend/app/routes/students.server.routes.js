// Load the module dependencies
const students = require("../controllers/students.server.controller");
const passport = require("passport");

// Define the routes module' method
module.exports = function (app) {
	// Set up the 'signup' routes
	app
		.route("/signup")
		.get(students.renderSignup)
		.post(students.signup);

	// Set up the 'signin' routes
	app
		.route("/signin")
		.get(students.renderSignin)
		.post(
			passport.authenticate("local", {
				successRedirect: "/",
				failureRedirect: "/signin",
				failureFlash: true
			})
		);

	// Set up the Facebook OAuth routes
	// app.get(
	// 	"/oauth/facebook",
	// 	passport.authenticate("facebook", {
	// 		failureRedirect: "/signin"
	// 	})
	// );
	// app.get(
	// 	"/oauth/facebook/callback",
	// 	passport.authenticate("facebook", {
	// 		failureRedirect: "/signin",
	// 		successRedirect: "/"
	// 	})
	// );

	// // Set up the Twitter OAuth routes
	// app.get(
	// 	"/oauth/twitter",
	// 	passport.authenticate("twitter", {
	// 		failureRedirect: "/signin"
	// 	})
	// );
	// app.get(
	// 	"/oauth/twitter/callback",
	// 	passport.authenticate("twitter", {
	// 		failureRedirect: "/signin",
	// 		successRedirect: "/"
	// 	})
	// );

	// // Set up the Google OAuth routes
	// app.get(
	// 	"/oauth/google",
	// 	passport.authenticate("google", {
	// 		scope: [
	// 			"https://www.googleapis.com/auth/userinfo.profile",
	// 			"https://www.googleapis.com/auth/userinfo.email"
	// 		],
	// 		failureRedirect: "/signin"
	// 	})
	// );
	// app.get(
	// 	"/oauth/google/callback",
	// 	passport.authenticate("google", {
	// 		failureRedirect: "/signin",
	// 		successRedirect: "/"
	// 	})
	// );

	// Set up the 'signout' route
	app	.get("/signout", students.signout);

	// app.get("/studentsList", students.list);

	// app
	// 	.route("/updateStudent/:studentId")
	// 	.get(students.read)
	// 	.put(students.update);

	// app.route("/deleteStudent/:studentId").get(students.delete);

 	app.route("/api/student").get(students.list);
	app.route("/api/student/:id").get(students.read);
	app.route("/api/student/byStudentNumber/:StudentNumber").get(students.read);
	app.route("/api/student/:studentNumber").post(students.create);
	app.route("/api/student/:studentNumber").put(students.update);
	app.route("/api/student/:id").delete(students.delete);

	// app.param("id", students.studentByID);
	// app.param("studentNumber", students.studentByStudentNumber);
};
