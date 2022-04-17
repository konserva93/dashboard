import { DataSet } from '@src/types/dataset';
import { OptionsList } from '@src/ui/OptionsList/OptionsList';
import React, { useCallback } from 'react';

interface IOddEvenFilterProps {
  defaultValue?: number,
  onChange: (fn: (data: DataSet) => DataSet) => void,
}

function oddEven(data: DataSet, option: number) {
  switch (option) {
    case 2: return data.filter((_, idx) => idx % 2); // Even
    case 1: return data.filter((_, idx) => idx % 2 === 0); // Odd
    case 0:
    default: return data.slice(0); // All
  }
}

export function OddEvenFilter({ defaultValue = 0, onChange }: IOddEvenFilterProps) {
  const handleChange = useCallback((value: number) => onChange((data: DataSet) => oddEven(data, value)), [onChange]);
  return (
    <OptionsList
      options={[
        { title: 'Even', value: 2 },
        { title: 'Odd', value: 1 },
        { title: 'All', value: 0 },
      ]}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
}
