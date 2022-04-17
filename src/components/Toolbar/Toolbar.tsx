import { DataSet } from '@src/types/dataset';
import { Range } from '@components/Toolbar/filters/Range';
import { ToolbarFilter } from '@src/types/dashboard';
import React from 'react';

interface IToolbarProps {
  filter: ToolbarFilter,
  onFilterChange: ((fn: (data: DataSet) => DataSet) => void);
}

export function Toolbar({ filter, onFilterChange }: IToolbarProps) {
  switch (filter.type) {
    case 'Range': {
      const defaultValue = filter.properties?.defaultValue;
      const startDate = defaultValue ? new Date(defaultValue.start) : undefined;
      const endDate = defaultValue ? new Date(defaultValue.end) : undefined;
      return (
        <Range
          defaultStart={startDate}
          defaultEnd={endDate}
          onFilterChange={filterFn => onFilterChange(newData => filterFn(newData, filter.properties?.columnName || ''))}
        />
      );
    }
    default: return null;
  }
}
