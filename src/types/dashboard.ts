export type DashboardConfiguration = {
  title: string,
  dataSource: string,
  leftPanel: LeftPanelFilter,
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

type LeftPanelFilterKeys = 'OddEven';

type LeftPanelFilter = {
  type: LeftPanelFilterKeys,
}

type Toolbar = {
  filter: ToolbarFilter,
  // TODO: add buttons support
  // buttons: Button[],
}

type ToolbarFilterKeys = 'Range';

type ToolbarFilter = {
  type: ToolbarFilterKeys,
  properties?: FilterProperties,
}

type FilterProperties = RangeProperties;

type RangeProperties = {
  columnName: string,
  start: string, // TODO: ��������� application � domain ����
  end: string,
}
