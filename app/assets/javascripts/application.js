// DO NOT REQUIRE jQuery or jQuery-ujs in this file!
// DO NOT REQUIRE TREE!

// CRITICAL that vendor-bundle must be BEFORE bootstrap-sprockets and turbolinks
// since it is exposing jQuery and jQuery-ujs

//= require vendor-bundle
//= require app-bundle

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require jquery
// require jquery_ujs
//= require bootstrap-sprockets
//= require dropzone
//= require turbolinks
// require_tree .

$(document).on('ready', function() {
	$(".menu-toggle").click(function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
			$("#menu-toggled").fadeToggle("slow", "linear");
	});

	$("#login-form-link").on('click', function() {
			$("#login-form").toggleClass("hidden");
			$("#register-form").toggleClass("hidden");
	});

	$("#register-form-link").on('click', function() {
			$("#login-form").toggleClass("hidden");
			$("#register-form").toggleClass("hidden");
	});

});
