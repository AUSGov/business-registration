var CatchBackButton = {
    Init: function (prompt, action, watch) {
        // create an iframe to host navigation events
        this.iframe = createiframe();
        
        // use window.confirm if we weren't passed a prompt function
        this.prompt = prompt != null ? prompt : function (action) {
            if (window.confirm("Are you sure you want to leave?")) {
                if (action != null)
                    action();
            }
        }
        // listen for back-button navigation message from the iframe
        window.addEventListener("message", function (event) {
            var key = event.message ? 'message' : 'data';
            var data = event[key];
            if (data === "nav-back") {
                navtrap.prompt(navtrap.action);
                navtrap.iframe.contentWindow.postMessage("update", "*");
            }
        });
        // push iframe back to the top of the history stack on changes to 'watch'
        if (listen !== null) {
            $(listen).on("load", function () {
                navtrap.iframe.contentWindow.postMessage("update", "*");
            });
        }
    },
    prompt: null,
    action: null,
    iframe: null
};

function createiframe() {
    // insert at top of body
    $("body").prepend('<iframe id="nav-trap" style="display: none;"></iframe>');
    $iframe = $("#nav-trap")[0];

    // open a channel to dynamically create the iframe document
    $iframe.contentDocument.open();
    $iframe.contentDocument.write("<html><head>" +
        "<script>" +
        "window.addEventListener('onload', function (event) {" +
        "history.pushState({ id: 'idle' }, '', 'idlepage');" +
        "});" +
        "window.addEventListener('popstate', function (event) {" +
        "parent.postMessage('nav-back', '*');" +
        "});" +
        "window.addEventListener('message', function (event) {" +
        "var key = event.message ? 'message' : 'data';" +
        "var data = event[key];" +
        "if (data === 'update')" +
        "history.pushState({id: 'idle' }, '', 'idlepage');" +
        "}, true);" +
        "</script>" +
        "</head ><body><p>TESTING</p></body></html>");
    $iframe.contentDocument.close();

    // return the newly created element
    return $iframe;
}
