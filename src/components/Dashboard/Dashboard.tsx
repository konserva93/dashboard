import { DataSet } from '@src/types/dataset';
import { Toolbar } from '@components/Toolbar/Toolbar';
import { getDashboard } from '@api/dashboards';
import React, { useCallback, useEffect, useState } from 'react';

interface IDashboardProps {
  data: DataSet,
  // properties: DashboardProperties, // use HOC withDataSource
}

export function Dashboard({ data }: IDashboardProps) {
  const { toolbar } = getDashboard();

  const [filteredData, setFilteredData] = useState<DataSet | undefined>();

  const [filterFunction, setFilterFunction] = useState<((data: DataSet) => DataSet) | undefined>();
  useEffect(() => {
    if (filterFunction) {
      setFilteredData(filterFunction(data));
    } else {
      setFilteredData(undefined);
    }
  }, [data, filterFunction]);

  const handleFilterChange = useCallback((filterFn: (data: DataSet) => DataSet) => setFilterFunction(() => filterFn), []);

  return (
    <>
      <Toolbar
        filter={toolbar.filter}
        onFilterChange={handleFilterChange}
      />
      {!!filteredData && <ul>{filteredData.map((row, idx) => <li key={idx}>{JSON.stringify(row)}</li>)}</ul>}
    </>
  );
}
