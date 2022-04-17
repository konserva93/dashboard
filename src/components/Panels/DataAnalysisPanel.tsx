import { Dashboard } from '@components/Dashboard/Dashboard';
import { DataAnalysisProperties } from '@src/types/tabs';
import { DataSet } from '@src/types/dataset';
import { OddEvenFilter } from '@components/Dashboard/filters/OddEvenFilter';
import React, { useState } from 'react';

interface IDataAnalysisPanelProps {
  data: DataSet,
  properties: DataAnalysisProperties,
}

export function DataAnalysisPanel({ data, properties }: IDataAnalysisPanelProps) {
  // render filter panel and dashboard
  const [filteredData, setFilteredData] = useState<DataSet>();
  return (
    <>
      {(() => {
        switch (properties.filter?.type) {
          case 'OddEven': return (
            <OddEvenFilter
              data={data}
              defaultValue={properties.filter?.properties.defaultValue}
              onChange={filtered => setFilteredData(filtered)}
            />
          );
          default: return null;
        }
      })()}
      {(() => {
        if (!filteredData) {
          return null; // TODO: add spinner
        }
        switch (properties.view.type) {
          case 'Dashboard': return <Dashboard data={filteredData} />;
          default: return null; // TODO: add placeholder
        }
      })()}
    </>
  );
}
