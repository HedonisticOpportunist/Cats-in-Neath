/*
The bare bones for the decreaseFont and increaseFont functions came from W3 Schools,
but I adjusted the code to be more generic rather than the specific example provided
on the page. I also got inspired to use it after doing Code Insitute's 5 Day Coding Challenge
where the fontsyle property was used to zoom in and out of a font.

[4] W3 Schools, 'Javascript Font Style Property', 2020. [Online]. Available:
https://www.w3schools.com/jsref/prop_style_fontsize.asp. [Accessed: 20-August-2020]

The bare bones of the handle bar function come from the installation page of the official
Handlebars page. I adjusted the code so that it would return the date in a specific format.

[3] Handlebarsjs.com, 'Handlebars Installation', 2020. [Online]. Available:
https://handlebarsjs.com/installation/. [Accessed: 20-Aug-2020].

The code that directs to the index came from StackOverFlow. I obviously adjusted it so
that it would return to the index page of this site. The same logic was used for the
directToArticlesPage().

[6] StackOverFlow, 'Return to Index', 2013. [Online]. Available:
https://stackoverflow.com/questions/13158786/how-to-return-to-home-page-using-javascript/13158910. [Accessed: 20-August-2020]

The bare bones of the validation came from W3 Schools, which I then modified
to suit my validation needs, which was to ensure that a validation message would be passed
depending on what the given user input was.

[5] W3 Schools, 'Javascript Form Validation', 2020. [Online]. Available:
https://www.w3schools.com/js/js_validation.asp. [Accessed: 20-August-2020]

Beyond the general (admittedly, minor) adjustments, I avoided using variables such as x around
and tried to name things as they were being used.

*/

//increase font
function increaseFont() {
  document.getElementById("text").style.fontSize = "larger";
}

// decrease font
function decreaseFont() {
  document.getElementById("text").style.fontSize = "smaller";
}

//return to index page
function directToIndex() {
  window.location.href = "index.html";
}

function directToArticlesPage() {
  window.location.href = "articles.html";
}

// handle bars date function
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

// form validation handlebars
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
