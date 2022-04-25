import { DataSet } from '@src/types/dataset';
import { DateRangePicker } from '@src/ui/DatePicker/Range/DateRangePicker';
import React, { useCallback } from 'react';

interface IRangeFilterProps {
  defaultStart?: Date,
  defaultEnd?: Date,
  onFilterChange: ((fn: (data: DataSet, columnName: string) => DataSet) => void),
}

function rangeFilter(data: DataSet, columnName: string, start: Date, end: Date) {
  return data?.filter(row => {
    const filterColumnValue = row[columnName];
    return !filterColumnValue
      || ((!start || new Date(filterColumnValue) >= start) && (!end || new Date(filterColumnValue) <= end));
  });
}

export function Range({ defaultStart, defaultEnd, onFilterChange }: IRangeFilterProps) {
  const handleChange = useCallback((range: [(Date | null), (Date | null)]) => {
    const [start, end] = range;
    if (start && end) {
      onFilterChange((data, columnName) => rangeFilter(data, columnName, start, end));
    }
  }, [onFilterChange]);

  return (
    <DateRangePicker
      defaultStart={defaultStart}
      defaultEnd={defaultEnd}
      onChange={handleChange}
    />
  );
}

/*

 */
