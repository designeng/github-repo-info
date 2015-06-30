require [
    "jquery"
    "app"
    "utils/clientip/index"
    "utils/storage/index"
], ($, app, clientIp, storage) ->

    $.when(clientIp).then (result) ->
        storage.clientIp = result.ip
        app.start()