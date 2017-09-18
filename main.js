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
    var scope = buildScope();
    var redirectTo = loginUrl +
      '?client_id=' + client_id +
      '&redirect_uri=' + window.encodeURIComponent(window.location.href) +
      (scope.length ? '&scope=' + scope : '') +
      '&response_type=token';
  
    window.location.href = redirectTo;

    return false;
  }

  function buildScope() {
    var str = '';

    $('#loginForm input[type=checkbox]:checked').each(function () {
      str += $(this).val() + '+';
    });

    return str.replace(/\+$/, '');
  }
}
