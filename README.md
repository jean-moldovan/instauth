# InstAuth

Authentication client for [Instagram API](https://www.instagram.com/developer/).

## About

Want to start using Instagram API right away, but don't know how to get an acсess token?
Here is a simple tool that let's you do that. Particularly useful when building an app in a Sandbox mode.

## Features
* Running in the browser
* Scope support
* Implicit authentication only

## Getting started
**Important**: this client works for implicit authentication only. This type of authentication [is not as secure](https://www.instagram.com/developer/authentication/) as server-side and therefore is disabled by default.

If you still want to continue using it, you need to enable `implicit OAuth` in your app's [settings page](https://www.instagram.com/developer/clients/manage/)

## Install
* Clone the repo
* Run simple http server (e.g. `python -m SimpleHTTPServer 8080`)
* Make sure client is running in the browser `http://localhost:8080/`

## How to use
* Go to your app's [settings page](https://www.instagram.com/developer/clients/manage/), open Security tab
* Add URI of a client to `Valid redirect URIs` text field (in our case `http://localhost:8080/`)
* Make sure `implicit OAuth` is enabled. Copy `Client ID` from the same page
* Go back to the client
* Paste `Client ID` and submit
* Enjoy having your access token

## Using deployed client
* Add `https://instauth.netlify.com/` to `Valid redirect URIs` text field in your app's Security settings
* Make sure `implicit OAuth` is enabled.
* Go to [https://instauth.netlify.com/](https://instauth.netlify.com/)
* Submit `Client Id`
