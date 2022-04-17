export type DashboardConfiguration = {
  title: string,
  toolbar: Toolbar,
  view: DataSetView,
}

type DataSetView = {
  type: DataSetViewTypes,
  properties: DataSetViewProperties,
}

type DataSetViewTypes = 'Table';

type DataSetViewProperties = {
  columns: Array<DataSetColumn>
}

type DataSetColumn = {
  name: string,
  title: string,
  field: string,
  type: 'number' | 'string' | 'Date', // HINT: � ����� ��� ����� ������������� ���������� ������
  isHidden: boolean, // HINT: ����� ����� ������� ���������� �� ����, ���� ���� � ������� ���
  // size: number,
}

type Toolbar = {
  filter: ToolbarFilter,
  // TODO: add buttons support
  // buttons: Button[],
}

export type ToolbarFilter = {
  type: ToolbarFilterKeys,
  properties?: FilterProperties,
}

type ToolbarFilterKeys = 'Range';

type FilterProperties = RangeProperties;

type RangeProperties = {
  columnName: string,
  defaultValue?: {
    start: string, // TODO: ��������� application � domain ����
    end: string,
  }
}
