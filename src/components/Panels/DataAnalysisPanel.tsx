import * as S from './DataAnalysisPanel.styled';
import { Dashboard } from '@components/Dashboard/Dashboard';
import { DataAnalysisProperties } from '@src/types/tabs';
import { DataSet } from '@src/types/dataset';
import { OddEvenFilter } from '@components/Panels/filters/OddEvenFilter';
import { SplitPanel } from '@src/ui/SplitPanel/SplitPanel';
import React, { useCallback, useMemo, useState } from 'react';

interface IDataAnalysisPanelProps {
  data: DataSet, // use HOC withDataSource
  properties: DataAnalysisProperties,
}

function getFilterComponent(type: string) {
  switch (type) {
    case 'OddEven': return OddEvenFilter;
    default: return null;
  }
}

function getDataView(type: string) {
  switch (type) {
    case 'Dashboard': return Dashboard;
    default: return null; // TODO: add placeholder
  }
}

export function DataAnalysisPanel({ data, properties }: IDataAnalysisPanelProps) {
  const [filteredData, setFilteredData] = useState<DataSet>();

  const handleChange = useCallback((filterFn: (data: DataSet) => DataSet) => setFilteredData(filterFn(data)), [data]);

  const filter = useMemo(() => getFilterComponent(properties.filter?.type || ''), [properties.filter?.type]);
  const dataView = useMemo(() => getDataView(properties.view.type), [properties.view.type]);

  return (
    <SplitPanel>
      <S.LeftPanel>
        <S.CreateButton
          text="Create new"
          icon="plus-circle"
          size="large"
          textAlign="center"
          primary
        />
        {properties.filter && filter && React.createElement(filter, {
          defaultValue: properties.filter.properties.defaultValue,
          onChange: handleChange,
        })}
      </S.LeftPanel>
      {filteredData && dataView && React.createElement(dataView, { data: filteredData })}
    </SplitPanel>
  );
}
