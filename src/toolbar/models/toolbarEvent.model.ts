import {IToolbarEvent} from '../interface/IToolbarEvent';

export class ToolbarEventModel implements IToolbarEvent {
  constructor(public name: string, public value: string = null) {
  }
}
