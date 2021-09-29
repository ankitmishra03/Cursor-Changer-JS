var source =
  "http://icons.iconarchive.com/icons/iconsmind/outline/128/Cursor-icon.png";
var key = "myKey";
var value = source;

chrome.storage.local.set({ key: value }, () => {
  console.log("Stored name: " + value);
});
chrome.storage.local.get("myKey", function (value) {
  console.log("Value currently is " + value);
});
var flag = 0;
document.addEventListener("DOMContentLoaded", function () {
  for (var i = 1; i <= 16; i++) {
    document.getElementById(`pic${i}`).addEventListener("click", handler);
  }
});
// The handler also must go in a .js file
function handler() {
  flag = 1;
  console.log("clicked");
  var elems = document.getElementsByTagName("body");
  source = document.getElementById(this.id).src;
  value = { name: source };
  chrome.storage.local.set({ key: value }, () => {
    console.log("Stored name: " + value.name);
  });
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.cursor = `url(${source}), default`;
    elems[i].style.zIndex = "99999";
  }
}
