import { DataAnalysisPanel } from '@components/Panels/DataAnalysisPanel';
import { Panel } from '@src/ui/Tabs/Panel.styled';
import { TabProperties, TabType } from '@src/types/tabs';
import { getDataSet } from '@api/dataSources';
import React from 'react';

interface ITabPanelProps {
  type: TabType,
  properties?: TabProperties,
  isVisible?: boolean
}

/**
 * Панель, соответствующая табу приложения.
 * @param type
 * @param properties
 * @param data
 * @constructor
 */
export function TabPanel({ type, properties, isVisible = true }: ITabPanelProps) {
  const data = getDataSet(); // TODO: use HOC withDataSource

  return (
    <Panel isVisible={isVisible}>
      {(() => {
        switch (type) {
          case 'DataAnalysis': return properties?.view
            ? <DataAnalysisPanel data={data} properties={properties} />
            : null; // TODO: add placeholder
          default: return null; // TODO: add placeholder
        }
      })()}
    </Panel>
  );
}
