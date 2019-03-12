$(document).ready(function () {
  const $listItems = $('.navbar-collapse li');

  $('.navbar-collapse a').click(e => {
    $listItems.removeClass('active');
    $(e.target).parent().addClass('active');
  });

  $(document).click(e => {
    const clickTarget = $(e.target),
      _isNavOpened = $('.navbar-collapse').hasClass('in');

    if (_isNavOpened === true && !clickTarget.hasClass('navbar-toggle')) {
      $('button.navbar-toggle').click();
    }
  });
});