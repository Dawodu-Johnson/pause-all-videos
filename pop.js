document.getElementById("run-script").addEventListener("click", async () => {
  const tabs = await chrome.tabs.query({});

  tabs.forEach((tab) => {
    if (tab.id && tab.url && !tab.url.startsWith("chrome://")) {
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        })
        .catch((err) => {
          console.error("Script injection failed:", err, "tabId:", tab.id);
        });
    }
  });
});
