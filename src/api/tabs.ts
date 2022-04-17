import { Tab } from '@src/types/tabs';

export const GetTabs = (): Tab[] => [
  {
    type: 'DataAnalysis',
    caption: 'Analyze',
    properties: {
      dataSourceUrl: '',
      filter: {
        type: 'OddEven',
        properties: {
          defaultValue: 0,
        },
      },
      view: {
        type: 'Dashboard',
        properties: {
          configurationUrl: '',
        },
      },
    },
  },
  {
    type: 'Campaigns',
    caption: 'My campaigns',
  },
  {
    type: 'Configure',
    caption: 'Configure',
  },
];
