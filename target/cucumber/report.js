$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/login.feature");
formatter.feature({
  "id": "test-login-feature-of-mercury-website.",
  "description": "",
  "name": "Test Login feature of mercury website.",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "test-login-feature-of-mercury-website.;mercury-login-test",
  "tags": [
    {
      "name": "@smoketest",
      "line": 3
    }
  ],
  "description": "",
  "name": "mercury login test",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user opens application page",
  "keyword": "Then ",
  "line": 6
});
formatter.step({
  "name": "user enters Credentials to LogIn",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "loginScript.openURL()"
});
formatter.result({
  "duration": 1022970000,
  "status": "failed",
  "error_message": "java.lang.NoSuchMethodError: com.google.common.collect.Multimaps.transformValues(Lcom/google/common/collect/ListMultimap;Lcom/google/common/base/Function;)Lcom/google/common/collect/ListMultimap;\n\tat com.google.common.net.MediaType.toString(MediaType.java:645)\n\tat org.openqa.selenium.remote.http.JsonHttpCommandCodec.encode(JsonHttpCommandCodec.java:197)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:130)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:66)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:572)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:139)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:160)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:117)\n\tat com.czeczotka.bdd.steps.Hook.openBrowser(Hook.java:12)\n\tat com.czeczotka.bdd.steps.loginScript.openURL(loginScript.java:21)\n\tat ✽.Given user launch browser(cucumber/login.feature:5)\n"
});
formatter.match({
  "location": "loginScript.launchapplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginScript.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginScript.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});