import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".e-list").slideUp(function() {
      $(".e-button").removeClass("open");
  });

  $(".e-button").on("click", function() {
      if ($(this).hasClass("open")) {
          $(".e-list").slideUp(function() {
              $(".e-button").removeClass("open");
          });
      } else {
          $(this).addClass("open");
          setTimeout(function() {
              $(".e-list").stop().slideDown();
          }, 200);
      }
  });

  }

}
