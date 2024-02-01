$(document).ready(function () {
    handlers.server_chat = function (message, shouldAddLine) {

        if (shouldAddLine === true) {
            handlers.chat_message({ type: "server", message: message });
            handlers.chat_message({ type: "server", message: "-" });
        } else {
            // message should just be a string
            handlers.chat_message({ type: "server", message: message });
        }
    }

    handlers.server_chat(loc("!LOC:Welcome user to yeat another boring lobby!"), true);
});