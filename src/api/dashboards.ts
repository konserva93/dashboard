import { DashboardConfiguration } from '../types/dashboard';

export const getDashboard = (): DashboardConfiguration[] => [{
  title: 'Dashboard',
  toolbar: {
    filter: {
      type: 'Range',
      properties: {
        columnName: 'date',
        start: '2021-08-21T00:00:00.000Z',
        end: '2021-09-21T00:00:00.000Z',
      },
    },
  },
  view: {
    type: 'Table',
    properties: {
      columns: [
        {
          name: 'data',
          title: 'Data',
          field: 'data',
          type: 'string',
          isHidden: false,
        },
        {
          name: 'summary1',
          title: 'Summary1',
          field: 'summary1',
          type: 'number',
          isHidden: false,
        },
        {
          name: 'summary2',
          title: 'Summary2',
          field: 'summary2',
          type: 'number',
          isHidden: false,
        },
        {
          name: 'summary3',
          title: 'Summary3',
          field: 'summary3',
          type: 'number',
          isHidden: false,
        },
        {
          name: 'summary4',
          title: 'Summary4',
          field: 'summary4',
          type: 'number',
          isHidden: false,
        },
        {
          name: 'summary5',
          title: 'Summary5',
          field: 'summary5',
          type: 'number',
          isHidden: false,
        },
        {
          name: 'date',
          title: '',
          field: 'date',
          type: 'Date',
          isHidden: true,
        },
      ],
    },
  },
}];
