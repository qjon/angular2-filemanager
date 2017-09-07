import {FileTypeFilterService} from './fileTypeFilter.service';
import {IFileTypeFilter} from '../toolbar/interface/IFileTypeFilter';

describe('fileTypeFilter', () => {
  let data: IFileTypeFilter;
  let service: FileTypeFilterService;

  beforeEach(() => {
    data = {
      name: 'Some file name',
      mimes: ['image/png', 'image/jpeg'],
      iconCls: 'image',
      text: 'some text',
      defaultSelected: true
    };

    service = new FileTypeFilterService();
  });

  describe('getValue', () => {
    it('should allowed to get last value', () => {
      service.filter$.next(data);

      expect(service.getValue()).toEqual(data);
    });
  });

  describe('setValue', () => {
    it('should set new value', () => {
      expect(service.getValue()).toBeNull();

      expect(service.setValue(data));

      expect(service.getValue()).toEqual(data);
    });
  });


});
