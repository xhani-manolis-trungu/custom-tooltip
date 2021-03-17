import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tooltipList' })
export class TooltipListPipe implements PipeTransform {

  transform(lines: string[]): string {

    let list: string = '';

    lines.forEach(line => {
      list += '• ' + line + '\n';
    });

    return list;
  }
}

/**
 * @title Basic tooltip
 */
@Component({
  selector: 'tooltip-overview-example',
  templateUrl: 'tooltip-overview-example.html',
  styleUrls: ['tooltip-overview-example.css'],
})
export class TooltipOverviewExample { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */