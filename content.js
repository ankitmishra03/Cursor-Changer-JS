setInterval(() => {
  chrome.tabs.executeScript({
    code: `
            var elems = document.getElementsByTagName("body");
            for(var i = 0; i < elems.length; i++){
              elems[i].style.cursor = "url(${source}), default";
              elems[i].style.zIndex = "99999";
            }
        `,
  });
}, 50);
