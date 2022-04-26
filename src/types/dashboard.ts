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

export type DataSetColumn = {
  name: string,
  title: string,
  field: string,
  type: 'number' | 'string' | 'Date',
  isHidden: boolean, // HINT: нужно чтобы сделать фильтрацию по дате, хотя даты в таблице нет
  isPrimary?: boolean,
  size: number,
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
    start: string, // TODO: разделить application и domain типы
    end: string,
  }
}
