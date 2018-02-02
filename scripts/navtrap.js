var CatchBackButton = {
    Init: function (prompt, action, watch) {
        // create an iframe to host navigation events
        this.iframe = createiframe();
		this.iframe.src = "#test";
        this.iframe.contentWindow.postMessage("init", "*");
		

        // use window.confirm if we weren't passed a prompt function
        this.prompt = prompt != null ? prompt : function (action) {
            if (window.confirm("Are you sure you want to leave?")) {
                action != null ? action() : history.back();
            } else {
				CatchBackButton.iframe.contentWindow.postMessage("update", "*");
			}
        }
        // listen for back-button navigation message from the iframe
        window.addEventListener("message", function (event) {
            var key = event.message ? 'message' : 'data';
            var data = event[key];
            if (data === "nav-back") {
                CatchBackButton.prompt(CatchBackButton.action);
                //CatchBackButton.iframe.contentWindow.postMessage("update", "*");
            }
        });
        // push iframe back to the top of the history stack on changes to 'watch'
        if (watch !== null) {
            $(watch).on("load", function () {
                CatchBackButton.iframe.contentWindow.postMessage("update", "*");
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
        "window.addEventListener('message', function (event) {" +
        "var key = event.message ? 'message' : 'data';" +
        "var data = event[key];" +
		"switch (data) {" +
		"case 'init': history.pushState({id: 'idle' }, '', '#');" +
		"window.addEventListener('popstate', function (event) {" +
        "parent.postMessage('nav-back', '*');" +
        "});" +
		"break;" +
        "case 'update': history.pushState({id: 'idle' }, '', '#');" +
		"}}, true);" +
        "</script>" +
        "</head ><body><p>TESTING</p></body></html>");
    $iframe.contentDocument.close();

    // return the newly created element
    return $iframe;
}