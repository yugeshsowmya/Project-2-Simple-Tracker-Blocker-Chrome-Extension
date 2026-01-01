chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ blockedCount: 0 });
});

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  chrome.storage.local.get("blockedCount", (data) => {
    let count = data.blockedCount || 0;
    count++;

    chrome.storage.local.set({ blockedCount: count });

    chrome.action.setBadgeText({
      text: count.toString()
    });

    chrome.action.setBadgeBackgroundColor({
      color: "#e53935"
    });
  });
});

