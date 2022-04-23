import { Button } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';

interface IOptionsListProps {
  options: ListOption[],
  defaultValue: number,
  onChange: (value: number) => void,
}

type ListOption = {
  title: string,
  subtitle?: string,
  value: number,
}

export function OptionsList({ options, defaultValue, onChange }: IOptionsListProps) {
  const [selected, setSelected] = useState(defaultValue); // TODO: check if default more than options.length
  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return options
    ? (
      <ul>
        {options.map((option, idx) => (
          <li
            key={idx}
          >
            <Button type="button" onClick={() => setSelected(option.value)}>
              {option.title}
            </Button>
          </li>
        ))}
      </ul>
    )
    : null;
}
