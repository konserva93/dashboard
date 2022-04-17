import { DataAnalysisPanel } from '@components/Panels/DataAnalysisPanel';
import { TabProperties, TabType } from '@src/types/tabs';
import { getDataSet } from '@api/dataSources';
import React from 'react';

interface ITabPanelProps {
  type: TabType,
  properties?: TabProperties,
}

/**
 * Панель, соответствующая табу приложения.
 * @param type
 * @param properties
 * @param data
 * @constructor
 */
export function TabPanel({ type, properties }: ITabPanelProps) {
  const data = getDataSet(); // TODO: use HOC withDataSource
  switch (type) {
    case 'DataAnalysis': return properties?.view
      ? <DataAnalysisPanel data={data} properties={properties} />
      : null; // TODO: add placeholder
    default: return null; // TODO: add placeholder
  }
}
