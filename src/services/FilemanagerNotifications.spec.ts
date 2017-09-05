import {FilemanagerNotifcations, INotification} from './FilemanagerNotifcations';
import {Subject} from 'rxjs/Subject';

describe('FilemanagerNotifications', () => {
  let notification: INotification;
  let service: FilemanagerNotifcations;

  beforeEach(() => {
    notification = {
      type: 'alert',
      title: 'Title',
      message: 'Message'
    };

    service = new FilemanagerNotifcations();
  });

  describe('getNotificationStream', () => {
    it('should allowed to get last value', () => {
      const notifications$ = service.getNotificationStream();

      expect(notifications$ instanceof Subject).toBe(true);
    });
  });

  describe('sendNotification', () => {
    it('should set new value', () => {
      const handler = jasmine.createSpy('handler');

      service.getNotificationStream()
        .subscribe(handler);

      service.sendNotification(notification);

      expect(handler).toHaveBeenCalledWith(notification);
    });
  });
});
