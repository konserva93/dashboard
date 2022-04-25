import { DataSet } from '@src/types/dataset';
import { DataSetColumn } from '@src/types/dashboard';
import { v4 as uuid } from 'uuid';
import React, { useMemo, useState } from 'react';

interface ITableProps {
  data: DataSet,
  columns: DataSetColumn[],
  search?: boolean
}

export function Table({ data: rawData, columns, search = false }: ITableProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filteredData = useMemo(() => {
    const filteringColumns = Object.keys(filters);
    return (filteringColumns.length
      ? rawData.filter(row => !(filteringColumns.some(filterColumnName => (
        filters[filterColumnName] && filters[filterColumnName] !== ''
        && !row[filterColumnName].toString().includes(filters[filterColumnName])
      ))))
      : rawData).map(row => ({ key: uuid(), values: row }));
  }, [rawData, filters]);
  const displayingColumns = useMemo(() => columns.filter(column => !column.isHidden), [columns]);

  return (
    <table>
      <thead>
        <tr>
          {displayingColumns.map(column => <th key={column.name}>{column.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredData.map(row => (
          <tr key={row.key}>
            {displayingColumns.map(column => (
              <td key={column.name}>{row.values[column.field]}</td>
            ))}
          </tr>
        ))}
        {search && (
          <tr>
            {displayingColumns.map(column => (
              <td key={column.name}>
                <input onChange={event => setFilters({ ...filters, [column.name]: event.target.value })} />
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
}
