import { Dashboard } from '@components/Dashboard/Dashboard';
import { DataAnalysisProperties } from '@src/types/tabs';
import { DataSet } from '@src/types/dataset';
import { OddEvenFilter } from '@components/Panels/filters/OddEvenFilter';
import React, { useCallback, useState } from 'react';

interface IDataAnalysisPanelProps {
  data: DataSet, // use HOC withDataSource
  properties: DataAnalysisProperties,
}

export function DataAnalysisPanel({ data, properties }: IDataAnalysisPanelProps) {
  const [filteredData, setFilteredData] = useState<DataSet>();

  const handleChange = useCallback((filterFn: (data: DataSet) => DataSet) => setFilteredData(filterFn(data)), [data]);

  return (
    <>
      {(() => {
        switch (properties.filter?.type) {
          case 'OddEven': return (
            <OddEvenFilter
              defaultValue={properties.filter?.properties.defaultValue}
              onChange={handleChange}
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
