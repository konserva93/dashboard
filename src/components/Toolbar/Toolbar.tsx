import { DataSet } from '@src/types/dataset';
import { Range } from '@components/Toolbar/filters/Range';
import { ToolbarFilter } from '@src/types/dashboard';
import React, { useCallback } from 'react';

interface IToolbarProps {
  filter: ToolbarFilter,
  onFilterChange: ((fn: (data: DataSet) => DataSet) => void);
}

export function Toolbar({ filter, onFilterChange }: IToolbarProps) {
  const handleFilterChange = useCallback((filterFn: (data: DataSet, columnName: string) => DataSet) => {
    onFilterChange(newData => filterFn(newData, filter.properties?.columnName || ''));
  }, [filter, onFilterChange]);

  switch (filter.type) {
    case 'Range': {
      const defaultValue = filter.properties?.defaultValue;
      const startDate = defaultValue ? new Date(defaultValue.start) : undefined;
      const endDate = defaultValue ? new Date(defaultValue.end) : undefined;
      return (
        <Range
          defaultStart={startDate}
          defaultEnd={endDate}
          onFilterChange={handleFilterChange}
        />
      );
    }
    default: return null;
  }
}
