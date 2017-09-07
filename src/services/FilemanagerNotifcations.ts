import {Subject} from 'rxjs/Subject';

export interface INotification {
  type: 'alert' | 'error' | 'success';
  title: string;
  message?: string;
}

export class FilemanagerNotifcations {
  private notifciation$ = new Subject<INotification>();

  public sendNotification(notification: INotification): void {
    this.notifciation$.next(notification);
  }

  public getNotificationStream(): Subject<INotification> {
    return this.notifciation$;
  }
}
