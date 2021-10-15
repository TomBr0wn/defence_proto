/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
	window.console.info("GOV.UK Prototype Kit - do not use for production");
}

//let current = new Date();

let current = new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" });
// "Friday, Jul 2, 2021

//let cDate = current.getFullYear() + "/" + (current.getMonth() + 1) + "/" + current.getDate();
//let cTime = current.getHours() + ":" + current.getMinutes();
// let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
//let dateTime = cDate + " " + " " + cTime;
//console.log(dateTime);

console.log(current);

$(document).ready(function () {
	window.GOVUKFrontend.initAll();
	window.MOJFrontend.initAll();

	$(".lastUpdateTime").html(current);
});

new MOJFrontend.FilterToggleButton({
  bigModeMediaQuery: "(min-width: 48.063em)",
  startHidden: true,
  toggleButton: {
    container: $(".moj-action-bar__filter"),
    showText: "Show filter",
    hideText: "Hide filter",
    classes: "govuk-button--secondary",
  },
  closeButton: {
    container: $(".moj-filter__header-action"),
    text: "Close",
  },
  filter: {
    container: $(".moj-filter"),
  },
});
