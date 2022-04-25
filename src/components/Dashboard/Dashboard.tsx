import { DashboardConfiguration } from '@src/types/dashboard';
import { DataSet } from '@src/types/dataset';
import { Table } from '@src/ui/Table/Table';
import { Toolbar } from '@components/Toolbar/Toolbar';
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
  return configuration
    ? (
      <>
        <Toolbar
          filter={configuration.toolbar.filter}
          onFilterChange={handleFilterChange}
        />
        {/* use view.type */}
        {!!filteredData && <Table data={filteredData} columns={configuration.view.properties.columns} /> }
      </>
    )
    : null;
}
