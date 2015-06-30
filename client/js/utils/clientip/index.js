define(["utils/ajax/ajaxRequest"], function(AjaxRequest) {
  var clientIpServiceURL;
  clientIpServiceURL = "https://api.ipify.org";
  return new AjaxRequest(clientIpServiceURL, {
    format: "json"
  }, "GET", "application/json");
});
