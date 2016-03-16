// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('click', '.item__title', function( e ) {
  e.preventDefault();
  $('#' + $(this).data('id')).addClass('item-modal--visible');
  $('body').addClass('modal-open');
});

$(document).on('click', '.close', function( e ) {
  e.preventDefault();
  $(this).parent().parent().parent().removeClass('item-modal--visible');
  $('body').removeClass('modal-open');
});
