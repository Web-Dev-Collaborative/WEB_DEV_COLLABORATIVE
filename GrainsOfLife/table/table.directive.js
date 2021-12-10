'use strict'

game.directive('board', function () {
  return {
    restrict: 'E',
    scope: {
      height: '@',
      width: '@'
    },
    // template: function () {
    //   // var height = 10
    //   // var width = 10
    //
    //   // build Table HTML
    //   var tablehtml = '';
    //   for (var h=0; h<height; h++) {
    //     tablehtml += "<tr id='row+" + h + "'>";
    //     for (var w=0; w<width; w++) {
    //       tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
    //     }
    //     tablehtml += "</tr>";
    //   }
    //
    //   return '<table id="board"><tbody>' + tablehtml + '</tbody></table>'
    // },
    template: `<table id="board">
      <tbody>
        <tr ng-repeat="el in new Array(+height) track by $index">
          <td ng-repeat="el in width">
          </td>
        </tr>
      </tbody>
    </table>`,
    link: function(scope, element, attr) {

    }
  }
});
