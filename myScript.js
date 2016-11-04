$(document).ready(function () {
    console.log('yo!!');
    var source = $("#handlebars-test").html();
    var template = Handlebars.compile(source);

    console.log(data);
    $("#main").append(template(data));
});