/*
This script was actually written before the decreaseFont and IncreaseFont functions
before the one that is used on the main index as well as article pages. The code explanation
was provided by the Code Institute tutors while doing the 5 Day Coding Challenge; however,
I did modify the code to use id rather than classes and also renamed the selectors to be
what I wanted them to be.

[2] Code Institute, '5 Day Coding Challenge', 2020. [Online]. Available:
https://codeinstitute.net/5-day-coding-challenge/?sitelink=5-Day-Coding-Challenge&&ads_cmpid=1578649861&ads_adid=62188641080&ads_matchtype=b&ads_network=g&ads_creative=417883010331&utm_term=%2Bcode%20%2Binstitute&ads_targetid=kwd-319867642491&utm_source=google&utm_medium=cpc&gclid=EAIaIQobChMIndqG7PWv6wIVEevtCh097wE2EAAYASABEgI71fD_BwE&gclsrc=aw.dsL.
[Accessed: 28-Aug-2020]

*/


//hover over the food heading
function foodHover() {
  document
    .getElementById("food")
    .style.fontSize = "300%";
}

//revert the food heading back to normal
function foodHoverOut() {
  document.
  getElementById("food")
    .style.fontSize = "100%";
}

//hover over the toxic food heading
function toxicHover() {
  document.getElementById("toxic")
    .style.fontSize = "300%";
}

//revert the toxic food heading back to normal
function toxicHoverOut() {
  document.getElementById("toxic")
    .style.fontSize = "100%";
}
