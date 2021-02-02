import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
//     var tabs = $('.tabs');
// var items = $('.tabs').find('a').length;
// var selector = $(".tabs").find(".selector");
// // var activeItem = tabs.find('.active');
// // var activeWidth = activeItem.innerWidth();
// // $(".selector").css({
// //   "left": activeItem.position.left + "px",
// //   "width": activeWidth + "px"
// // });
//
// setTimeout(() => {
//       var activeItem = tabs.find(".active");
//       var activeWidth = activeItem.innerWidth();
//       $(".selector").css({
//         left: activeItem.position.left + "px",
//         width: activeWidth + "px"
//       });
//     }, 500);
// $(".tabs").on("click","a",function(){
//   $('.tabs a').removeClass("active");
//   $(this).addClass('active');
//   var activeWidth = $(this).innerWidth();
//   var itemPos = $(this).position();
//   $(".selector").css({
//     "left":itemPos.left + "px",
//     "width": activeWidth + "px"
//   });
// });
  }

}
