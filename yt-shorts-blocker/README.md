# YT Shorts Blocker

Chrome extension that blocks **only** YouTube Shorts. Regular videos, search,
subscriptions, etc. all keep working.

## What it does

- Opening any `youtube.com/shorts/...` link redirects to the YouTube homepage.
- Clicking a Short inside YouTube does nothing.
- Hides Shorts shelves, Shorts mixed into feeds/search/sidebar, the "Shorts"
  sidebar entry and the "Shorts" tab on channel pages.
- Works on `www.youtube.com` and `m.youtube.com`.

## Install

1. Open `chrome://extensions`
2. Turn on **Developer mode** (top right)
3. Click **Load unpacked** and pick this `yt-shorts-blocker` folder

## Notes

YouTube changes its page markup from time to time. If some Shorts start
showing up again, the selectors in `hide-shorts.css` probably need an update.
The redirect/click blocking doesn't depend on markup and keeps working.
