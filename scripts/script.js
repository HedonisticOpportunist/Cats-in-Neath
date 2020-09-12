/*
The bare bones for the decreaseFont and increaseFont functions came from W3Schools,
but I adjusted the code to be more generic rather than using the specific example provided by W3 schools.
I also got inspired to use it after doing Code Institute's 5 Day Coding Challenge where the
font style property was used to make a heading bigger or smaller.

[4] W3 Schools, 'Javascript Font Style Property', 2020. [Online]. Available:
https://www.w3schools.com/jsref/prop_style_fontsize.asp. [Accessed: 20-August-2020]

[2] Code Institute, '5 Day Coding Challenge', 2020. [Online]. Available:
https://codeinstitute.net/5-day-coding-challenge/.[Accessed: 28-Aug-2020]

The bare bones of the handle bar function came from the installation page of the official
Handlebars page. I adjusted the code so that it would return the date in a specific format.

[3] Handlebarsjs.com, 'Handlebars Installation', 2020. [Online]. Available:
https://handlebarsjs.com/installation/. [Accessed: 20-Aug-2020].

The code that directs to the index page came from StackOverFlow. I obviously adjusted it so
that it would return to the index page of my site. The same logic was used for the
directToArticlesPage() as well as the directToReport() function.

[6] StackOverFlow, 'Return to Index', 2013. [Online]. Available:
https://stackoverflow.com/questions/13158786/how-to-return-to-home-page-using-javascript/13158910. [Accessed: 20-August-2020]

The bare bones of the validation code came from W3Schools, which I then modified
to suit my validation purposes, which was to ensure that a validation message/error would be passed
depending on what the given user input was.

[5] W3 Schools, 'Javascript Form Validation', 2020. [Online]. Available:
https://www.w3schools.com/js/js_validation.asp. [Accessed: 20-August-2020]
*/

/*
increase font by a font size
*/
function increaseFont() {
  document.getElementById("text").style.fontSize = "larger";
}

/*
decrease font by a font size
*/
function decreaseFont() {
  document.getElementById("text").style.fontSize = "smaller";
}

/*
return to the index page
*/
function directToIndex() {
  window.location.href = "index.html";
}

/*
return to the report page
*/
function directToReport() {
  window.location.href = "report.html";
}

/*
return to the articles page
*/
function directToArticlesPage() {
  window.location.href = "articles.html";
}

/*
handle bars date function
*/
$(document).ready(function() {

  //prepare the html segement
  let html_template = $("#date-template").html();

  //load the template
  let template = Handlebars.compile(html_template);

  //display date in UTC
  let date = new Date();

  //determine how the date is to be displayed
  let date_context = {
    "date": date
  };

  //let the compiled html be displayed in the
  //relevant placeholder
  let compiled_html = template(date_context);
  $('.content-placeholder').html(compiled_html);
});

/*
form validation
*/
function validateMessage() {
  // find message field by its id selector
  let message_field = document.getElementById("msg").value;

  //find the validation message field by its id selector
  let validation_field = document.getElementById("validation_message");

  //if the message is an empty string or null
  //then display text that says that the field needs to be filled out
  if (message_field == "" || message_field == null) {
    text = "Message field must be filled out.";
    validation_field.innerHTML = text;
  } else { // else the message displays that the text has been submitted.
    text = "You have successfully submitted a message.";
    validation_field.innerHTML = text;
  }
}