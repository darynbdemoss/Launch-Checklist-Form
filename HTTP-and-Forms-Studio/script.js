window.addEventListener("load", function () {
  let actions = {
    "google": "https://www.google.com/search",
    "duckDuckGo": "https://duckduckgo.com/",
    "bing": "https://www.bing.com/search",
    "ask": "https://www.ask.com/web",
  };

  let form = this.document.getElementById("searchForm");

  form.addEventListener("submit", function () {
    let inputchecked = document.querySelector("input[name=engine]:checked");
    let searchEnine = inputchecked.value;
    let searchEngineUrl = actions[searchEnine];
    form.setAttribute("action", searchEngineUrl);
  });
});
