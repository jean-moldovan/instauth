$(document).ready(init);

function init() {
  var loginUrl = 'https://api.instagram.com/oauth/authorize';

  run();

  function run() {
    if (window.location.href.indexOf('access_token') > -1) {
      showToken();
    } else {
      showLoginForm();
    }
    stopLoading();
  }

  function stopLoading() {
    $('#loading').hide();
  }

  function showToken() {
    const token = window.location.hash.split('=')[1];

    $('#home').show();

    $('#token')
      .show()
      .text(token)
      .on('click', function () {
        window.getSelection().selectAllChildren(document.getElementById('token'));
      })
    $
  }

  function showLoginForm() {
    $('#loginForm')
      .show()
      .submit(login);
  }

  function login() {
    var client_id = $('#client_id').val();
  
    window.location.href = loginUrl +
      '?client_id=' + client_id +
      '&redirect_uri=' + window.encodeURIComponent(window.location.href) +
      '&response_type=token';

    return false;
  }
}