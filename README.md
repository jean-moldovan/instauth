# InstAuth

## About
Authentication client for [Instagram API](https://www.instagram.com/developer/).

Want to start using an Instagram API right away, but don't know how to get an acess token?
Here is a simple tool that let's you do that.

**Important**: this client works for implicit authentication only. This type of authentication [is not as secure](https://www.instagram.com/developer/authentication/) as server-side and therefore is disabled by default.

If you still want to continue using it, you need to enable `implicit OAuth` in your app's [settings page](https://www.instagram.com/developer/clients/manage/)

## How to use

* Make sure `implicit OAuth` is enabled in your app's [settings page](https://www.instagram.com/developer/clients/manage/)
* Copy `Client ID` from the same page
* Go to [https://instauth.netlify.com/](https://instauth.netlify.com/)
* Paste `Client ID` and submit
* Enjoy having your access token