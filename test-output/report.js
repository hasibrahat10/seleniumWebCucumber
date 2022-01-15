$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Home.feature");
formatter.feature({
  "name": "Homepage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I want to search in the search box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test-02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter a text input \"hasib\" in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enter_a_text_input_in_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search result will be listed as \"Hasib\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.searchResultWillBeListedAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});