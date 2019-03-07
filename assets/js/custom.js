$(document).ready(function(){

  $(".nav-link.dropbtn").click(function() {
    $('.dropdown-content').toggle('show');
    $(this).children("span").toggle();
  });

  // $(document).click(function (e) {
  //     e.stopPropagation();
  //     var container = $(".nav-link.dropbtn");
  //
  //     //check if the clicked area is dropDown or not
  //     if (container.has(e.target).length === 0) {
  //         $('.dropdown-content').hide();
  //     }
  // });
});
