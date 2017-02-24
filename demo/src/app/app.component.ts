import {Component} from '@angular/core';
import {ISelectFile} from "../../../main";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'app works!';

    public isMultiSelection = false;

    public toggleMultiSelection() {
        this.isMultiSelection = !this.isMultiSelection;
    }

    public selectFile(data: ISelectFile) {
        console.log(data);
    }
}
