/*
The bare bones for the decreaseFont and increaseFont functions came from W3Schools,
but I adjusted the code to be more generic rather than using the specific example provided by W3 schools. I also got inspired to use it after doing Code Institute's 5 Day Coding Challenge
where the font style property was used to make a heading bigger or smaller.

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
directToArticlesPage() function.

[6] StackOverFlow, 'Return to Index', 2013. [Online]. Available:
https://stackoverflow.com/questions/13158786/how-to-return-to-home-page-using-javascript/13158910. [Accessed: 20-August-2020]

The bare bones of the validation code came from W3Schools, which I then modified
to suit my validation purposes, which was to ensure that a validation message/error would be passed
depending on what the given user input was.

[5] W3 Schools, 'Javascript Form Validation', 2020. [Online]. Available:
https://www.w3schools.com/js/js_validation.asp. [Accessed: 20-August-2020]
*/

//increase font
function increaseFont() {
  document.getElementById("text").style.fontSize = "larger";
}

//decrease font
function decreaseFont() {
  document.getElementById("text").style.fontSize = "smaller";
}

//return to index page
function directToIndex() {
  window.location.href = "index.html";
}

//return to the articles page
function directToArticlesPage() {
  window.location.href = "articles.html";
}

//handle bars date function
$(function() {

  let html_template = $("#date-template").html();

  let template = Handlebars.compile(html_template);

  let date = new Date();

  let date_context = {
    "date": date
  };

  let compiled_html = template(date_context);
  $('.content-placeholder').html(compiled_html);
});

//form validation
function validateMessage() {
  let message_field = document.getElementById("msg").value;
  if (message_field == "" || message_field == null) {
    text = "Message field must be filed out.";
    document.getElementById("validation_message").innerHTML = text;
  } else {
    text = "You have successfully submitted a message.";
    document.getElementById("validation_message").innerHTML = text;
  }
}
