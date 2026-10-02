// YouTube is a single-page app, so clicking a Short doesn't do a real page
// load and the declarativeNetRequest redirect never sees it. This catches
// those in-app navigations.

const isShorts = (url) => {
  try {
    return new URL(url, location.origin).pathname.startsWith("/shorts");
  } catch {
    return false;
  }
};

const leaveShorts = () => {
  if (isShorts(location.href)) location.replace("https://www.youtube.com/");
};

// Stop clicks on any link to a Short before YouTube handles them.
document.addEventListener(
  "click",
  (e) => {
    const link = e.target.closest?.("a[href]");
    if (link && isShorts(link.getAttribute("href"))) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  },
  true
);

// Fallback for anything that still navigates to /shorts (back button, etc).
window.addEventListener("yt-navigate-start", leaveShorts);
window.addEventListener("yt-navigate-finish", leaveShorts);
window.addEventListener("popstate", leaveShorts);
setInterval(leaveShorts, 1000);
leaveShorts();
