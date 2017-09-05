import {SearchFilterService} from './searchFilter.service';

describe('searchFilter', () => {
  let data: string;
  let service: SearchFilterService;

  beforeEach(() => {
    data = 'Some string';

    service = new SearchFilterService();
  });

  describe('getValue', () => {
    it('should allowed to get last value', () => {
      service.filter$.next(data);

      expect(service.getValue()).toBe(data);
    });
  });

  describe('setValue', () => {
    it('should set new value', () => {
      expect(service.getValue()).toBe('');

      expect(service.setValue(data));

      expect(service.getValue()).toBe(data);
    });
  });
});
