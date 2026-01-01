document.addEventListener("DOMContentLoaded", () => {
  const countText = document.getElementById("count");
  const resetBtn = document.getElementById("reset");

  chrome.storage.local.get("blockedCount", (data) => {
    countText.textContent = `Blocked trackers: ${data.blockedCount || 0}`;
  });

  resetBtn.addEventListener("click", () => {
    chrome.storage.local.set({ blockedCount: 0 }, () => {
      chrome.action.setBadgeText({ text: "" });
      countText.textContent = "Blocked trackers: 0";
    });
  });
});
