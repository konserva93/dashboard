import * as S from './DateRangePicker.styled';
import { DateRange, DateRangePicker as Picker } from '@blueprintjs/datetime';
import { Popover2 } from '@blueprintjs/popover2';
import { SVG } from '@src/ui/SVG/SVG';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';

function formatDate(date: Date | null) {
  if (!date) {
    return '...';
  }
  return format(date, 'MMM dd, yyyy');
}

interface IDateRangePickerProps {
  defaultStart?: Date,
  defaultEnd?: Date,
  onChange: (range: [Date | null, Date | null]) => void;
}

export function DateRangePicker({ defaultStart, defaultEnd, onChange }: IDateRangePickerProps) {
  const [value, setValue] = useState<[Date | null, Date | null]>([defaultStart || null, defaultEnd || null]);
  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  const handleDateRangeChange = useCallback((newRange: DateRange) => setValue(newRange), [setValue]);

  return (
    <Popover2
      interactionKind="click"
      placement="bottom"
      content={(
        <Picker
          shortcuts={false}
          defaultValue={value}
          allowSingleDayRange
          onChange={handleDateRangeChange}
        />
      )}
    >
      <S.Select>
        <S.DateRange>
          {`${formatDate(value[0])} \u00B7 ${formatDate(value[1])}`}
        </S.DateRange>
        <SVG name="dropdown" height={24} width={24} />
      </S.Select>
    </Popover2>
  );
}
