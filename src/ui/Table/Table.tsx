import * as S from './Table.styled';
import { DataSet } from '@src/types/dataset';
import { DataSetColumn } from '@src/types/dashboard';
import { v4 as uuid } from 'uuid';
import React, { useMemo, useState } from 'react';

function getAlignment(type: string) {
  return type === 'number' ? 'right' : 'left';
}

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
    <S.Table>
      <S.Header>
        <tr>
          {displayingColumns.map(column => (
            <S.HeaderCell
              key={column.name}
              align={getAlignment(column.type)}
              $size={column.size}
            >
              {column.title}
            </S.HeaderCell>
          ))}
        </tr>
      </S.Header>
      <tbody>
        {filteredData.map(row => (
          <S.Row key={row.key}>
            {displayingColumns.map(column => (
              <S.Cell
                key={column.name}
                primary={column.isPrimary}
                align={getAlignment(column.type)}
                $size={column.size}
              >
                {row.values[column.field]}
              </S.Cell>
            ))}
          </S.Row>
        ))}
        {search && (
          <S.SearchBar>
            {displayingColumns.map(column => (
              <S.SearchCell
                key={column.name}
                $size={column.size}
              >
                <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setFilters({ ...filters, [column.name]: event.target.value });
                }}
                />
              </S.SearchCell>
            ))}
          </S.SearchBar>
        )}
      </tbody>
    </S.Table>
  );
}
