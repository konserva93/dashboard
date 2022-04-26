import * as S from './Dashboard.styled';
import { DashboardConfiguration } from '@src/types/dashboard';
import { DataSet } from '@src/types/dataset';
import { Table } from '@src/ui/Table/Table';
import { Toolbar } from '@components/Toolbar/Toolbar';
import { Dashboard as View } from '@src/ui/Dashboard/Dashboard';
import { getDashboard } from '@api/dashboards';
import React, { useCallback, useEffect, useState } from 'react';

interface IDashboardProps {
  data: DataSet,
  // properties: DashboardProperties, // use HOC withDataSource
}

export function Dashboard({ data }: IDashboardProps) {
  const [configuration, setConfiguration] = useState<DashboardConfiguration>();
  useEffect(() => {
    setConfiguration(getDashboard());
  }, []);

  const [filteredData, setFilteredData] = useState<DataSet | undefined>();
  const [filterFunction, setFilterFunction] = useState<((data: DataSet) => DataSet) | undefined>();
  useEffect(() => {
    if (filterFunction) {
      setFilteredData(filterFunction(data));
    } else {
      setFilteredData(undefined);
    }
  }, [data, filterFunction]);

  const handleFilterChange = useCallback((filterFn: (data: DataSet) => DataSet) => {
    setFilterFunction(() => filterFn);
  }, []);

  // TODO: use configuration.view.type
  return configuration
    ? (
      <View
        title={configuration.title}
        toolbar={(
          <>
            <Toolbar filter={configuration.toolbar.filter} onFilterChange={handleFilterChange} />
            <S.PrintButton />
            <S.DownloadButton />
          </>
        )}
        dataView={filteredData ? <Table data={filteredData} columns={configuration.view.properties.columns} search /> : null}
      />
    )
    : null;
}
