import * as S from './Table.styled';
import { DataSet } from '@src/types/dataset';
import { DataSetColumn } from '@src/types/dashboard';
import { HeaderChevron } from '@src/ui/Table/HeaderChevron/HeaderChevron';
import { v4 as uuid } from 'uuid';
import React, { useCallback, useMemo, useState } from 'react';

function getAlignment(type: string) {
  return type === 'number' ? 'right' : 'left';
}

interface ITableProps {
  data: DataSet,
  columns: DataSetColumn[],
  search?: boolean
}

const sortingDirections = [-1, 1, 0];

export function Table({ data: rawData, columns, search = false }: ITableProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const [sortingColumn, setSortingColumn] = useState<string | undefined>();
  const [direction, setDirection] = useState(0); // HINT: номер варианта сортировки из списка
  const currentSorting = useMemo(() => sortingDirections[direction], [direction]);

  const changeSorting = useCallback((columnName: string) => {
    if (columnName === sortingColumn) {
      const nextDirection = (direction < (sortingDirections.length - 1)) ? direction + 1 : 0;
      setDirection(nextDirection);
    } else {
      setSortingColumn(columnName);
      setDirection(0);
    }
  }, [sortingColumn, direction]);

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

  const data = useMemo(() => (sortingColumn && currentSorting !== 0
    ? [...filteredData].sort((a, b) => {
      if (a.values[sortingColumn] === b.values[sortingColumn]) {
        return 0;
      }
      return (a.values[sortingColumn] > b.values[sortingColumn] ? currentSorting : -currentSorting);
    })
    : filteredData), [filteredData, sortingColumn, currentSorting]);

  return (
    <S.Table>
      <S.Header>
        <tr>
          {displayingColumns.map(column => (
            <S.HeaderCell
              key={column.name}
              align={getAlignment(column.type)}
              $size={column.size}
              onClick={() => changeSorting(column.name)}
            >
              {column.name === sortingColumn && <HeaderChevron sorting={currentSorting} />}
              <span>{column.title}</span>
            </S.HeaderCell>
          ))}
        </tr>
      </S.Header>
      <tbody>
        {data.map(row => (
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
