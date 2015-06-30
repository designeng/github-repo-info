define [
    "utils/ajax/ajaxRequest"
], (AjaxRequest) ->
    
    clientIpServiceURL = "https://api.ipify.org"
    return new AjaxRequest(clientIpServiceURL, {format: "json"}, "GET", "application/json")