# Project-2-Simple-Tracker-Blocker-Chrome-Extension
## Project Overview
Simple Tracker Blocker is a lightweight Chrome browser extension that helps users improve their online privacy by blocking common tracking and advertising scripts on websites. The extension monitors network requests and blocks known tracker domains such as Google Ads and DoubleClick, preventing unnecessary tracking.
This project demonstrates basic concepts of browser extensions, web privacy, and network request interception using Chrome Extension APIs.

## Objectives
 - Understand how browser extensions work
 - Learn how trackers collect user data
 - Block third-party tracking requests
 - Display the number of blocked trackers using a popup UI
 - Improve awareness of web security and privacy

## Technologies Used
 1.HTML – Popup user interface
 2.CSS – Styling the popup
 3.JavaScript – Extension logic
 4.Chrome Extension APIs
      declarativeNetRequest
      storage
      action
 5.Google Chrome (Developer Mode)

## Features
 - Blocks known tracking and advertising domains
 - Displays real-time count of blocked trackers
 - Reset counter option
 - Lightweight and easy to use
 - Works automatically in the background

## How It Works
The extension listens to outgoing network requests.
Requests matching known tracker domains are blocked.
Each blocked request increments a counter.
The popup UI displays the total blocked trackers.
The counter value is stored using Chrome storage.

## Installation Steps
 1.Clone or download this repository.
 2.Open Google Chrome and go to chrome://extensions/
 3.Enable Developer mode (top right).
 4.Click Load unpacked.
 5.Select the project folder.
 6.The extension will be added successfully.

## How to Test
 1.Open any website like YouTube.
 2.Open Developer Tools → Console.
 3.Look for messages like:
       ERR_BLOCKED_BY_CLIENT
 4.Click the extension icon to see the number of blocked trackers.

## Screenshots
Screenshots included in this repository:
  1.Extension enabled in Chrome - "Extension enabled.png"
  2.Console showing blocked tracker requests - "Tracker Blocked.png"
  3.Popup UI displaying blocked tracker count - "Popup showing blocked trackers.png"

## Security & Privacy
No personal data is collected.
No browsing history is stored.
All blocking happens locally in the browser.

## Learning Outcomes
Learned Chrome extension structure.
Gained understanding of trackers and ads.
Implemented request blocking logic.
Improved frontend and JavaScript skills.
Hands-on experience with browser security concepts.

AUTHOR
SOWMYA S
Intern(CuberSecurity)


