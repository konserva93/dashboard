import * as S from './OptionsList.styled';
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
  icon?: string,
}

export function OptionsList({ options, defaultValue, onChange }: IOptionsListProps) {
  const [selected, setSelected] = useState(defaultValue); // TODO: check if default more than options.length
  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return options
    ? (
      <S.List>
        {options.map((option, idx) => (
          <li
            key={idx}
          >
            <S.Option
              text={option.title}
              secondaryText={option.subtitle}
              icon={option.icon}
              selected={selected === option.value}
              onClick={() => setSelected(option.value)}
            />
          </li>
        ))}
      </S.List>
    )
    : null;
}
