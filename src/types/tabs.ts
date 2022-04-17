export type Tab = {
  type: TabType,
  caption: string,
  properties?: TabProperties,
}

export type TabType = 'DataAnalysis' | 'Campaigns' | 'Configure';

export type TabProperties = DataAnalysisProperties;

export type DataAnalysisProperties = {
  dataSourceUrl: string,
  filter?: DataSetFilter,
  view: DataSetView,
}

type DataSetView = {
  type: DataSetViewType,
  properties: DataSetViewProperties,
};

type DataSetViewType = 'Dashboard';

type DataSetViewProperties = DashboardProperties;

type DashboardProperties = {
  configurationUrl: string,
}

type DataSetFilter = {
  type: DataSetFilterType,
  properties: DataSetFilterProperties,
}

type DataSetFilterType = 'OddEven';

type DataSetFilterProperties = OddEvenProperties;

export type OddEvenProperties = {
  defaultValue: number,
}
