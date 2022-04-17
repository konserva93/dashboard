import { DataSet } from '@src/types/dataset';
import { DateRangePicker } from '@src/ui/DatePicker/Range/DateRangePicker';
import React from 'react';

interface IRangeFilterProps {
  defaultStart?: Date,
  defaultEnd?: Date,
  onFilterChange: ((fn: (data: DataSet, columnName: string) => DataSet) => void),
}

function rangeFilter(data: DataSet, columnName: string, start: Date, end: Date) {
  return data?.filter(row => {
    const filterColumnValue = row.find(column => Object.keys(column)[0] === columnName)?.[columnName];
    return !filterColumnValue
      || ((!start || new Date(filterColumnValue) >= start) && (!end || new Date(filterColumnValue) <= end));
  });
}

export function Range({ defaultStart, defaultEnd, onFilterChange }: IRangeFilterProps) {
  return (
    <DateRangePicker
      defaultStart={defaultStart}
      defaultEnd={defaultEnd}
      onChange={range => {
        const [start, end] = range;
        if (start && end) {
          onFilterChange((data, columnName) => rangeFilter(data, columnName, start, end));
        }
      }}
    />
  );
}

/*

 */
