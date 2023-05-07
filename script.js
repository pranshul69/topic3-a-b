$(document).ready(function() {
    $('#login-btn').click(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
      if (username === 'garage1' && password === 'password1') {
        window.location.href = 'user1.html';
      } else if (username === 'garage2' && password === 'password2') {
        window.location.href = 'user2.html';
      } else {
        alert('Invalid login credentials');
      }
    });
  });
  