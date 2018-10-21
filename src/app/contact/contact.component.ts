import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  Ctrl = function($scope) {
    $scope.skills = [];

    $scope.skill = '';
    $scope.submit = function() {
      if (!!$scope.skill) {
        $scope.skills.push($scope.skill);
      }
      $scope.skill = '';
    };
  };
}
