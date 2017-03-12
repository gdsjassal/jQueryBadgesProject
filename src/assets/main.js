$(function() {

  // your code will go here
    $.ajax({
        url : "https://www.codeschool.com/users/Gdsjassal.json",
        dataType: "jsonp",
        success: function (response) {
            for (var i = 0; i < response.courses.completed[i]; i++) {
                $("#badges").append('<div class="course"><h3>' + response.courses.completed[i].title + '</h3><img src="' + response.courses.completed[i].badge + '" ><a href="' + response.courses.completed[i].url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
            }
        }
    });
});
