import { DateRangePicker as Picker } from '@blueprintjs/datetime';

import React, { useEffect, useState } from 'react';

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

  return (
    <Picker
      shortcuts={false}
      defaultValue={value}
      onChange={newRange => setValue(newRange)}
    />
  );
}
