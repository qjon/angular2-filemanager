export interface IFileTypeFilter {
  name: string;
  mimes: string[];
  iconCls: string;
  text?: string;
  defaultSelected?: boolean;
}
