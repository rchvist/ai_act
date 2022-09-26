// Thank this guy: https://stackoverflow.com/a/9899701
function docReady(fn) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/*
 * This script should make a specific element's click event open
 * the svg label editor in a new tab, and then send it the svg that's rendered
 * in the current page via a postMessage event.
 */

// Need the svg label editor's url.

var elementId = "svg-editor-link";
var EDITOR_URI = 'https://labeleditor.cortext.net';

docReady(function() {
  var theAnchor = document.getElementById(elementId);
  if (theAnchor) {
    theAnchor.addEventListener('click', function(event) {
      var svgs = document.getElementsByTagName("svg");
      if (!svgs[0]) {
        console.error("no svgs in this page");
        return;
      }
      var editorWindow = window.open(EDITOR_URI, '_blank');
      window.addEventListener("message", receiveMessage, false);
      function receiveMessage(event) {
        if (event.origin === EDITOR_URI) {
          editorWindow.postMessage(svgs[0].outerHTML, EDITOR_URI);
        }
      }
    });
  } else {
    console.error('#'+elementId+' not found');
  }
});
