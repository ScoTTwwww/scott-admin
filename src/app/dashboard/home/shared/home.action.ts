import { Injectable } from '@angular/core';


@Injectable()
export class HomeAction {

  static LOAD = '[Home] LOAD';
  load(xxx) {
    return {
      type: HomeAction.LOAD,
      payload: xxx
    };
  }

 

}