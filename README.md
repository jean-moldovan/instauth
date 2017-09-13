# InstAuth

Authentication client for [Instagram API](https://www.instagram.com/developer/).

## About

Want to start using Instagram API right away, but don't know how to get an acсess token?
Here is a simple tool that let's you do that.

**Important**: this client works for implicit authentication only. This type of authentication [is not as secure](https://www.instagram.com/developer/authentication/) as server-side and therefore is disabled by default.

If you still want to continue using it, you need to enable `implicit OAuth` in your app's [settings page](https://www.instagram.com/developer/clients/manage/)

## How to use

### Manual deploy
* Clone the repo
* Publish the source code via [Netlify](https://www.netlify.com/) or any other deployment tool of your choice
* Go to your app's [settings page](https://www.instagram.com/developer/clients/manage/)
* Go to security tab
* Add URI of a newly published client to `Valid redirect URIs` text field
* Make sure `implicit OAuth` is enabled. Copy `Client ID` from the same page
* Go to the client you've just published
* Paste `Client ID` and submit
* Enjoy having your access token

### Using existing client
* Go to your app's [settings page](https://www.instagram.com/developer/clients/manage/)
* Go to security tab
* Add `https://instauth.netlify.com/` to `Valid redirect URIs` text field
* Make sure `implicit OAuth` is enabled. Copy `Client ID` from the same page
* Go to [https://instauth.netlify.com/](https://instauth.netlify.com/)
* Paste `Client ID` and submit
* Enjoy having your access token