import { DateRange, DateRangePicker as Picker } from '@blueprintjs/datetime';

import React, { useCallback, useEffect, useState } from 'react';

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
    <Picker
      shortcuts={false}
      defaultValue={value}
      onChange={handleDateRangeChange}
    />
  );
}
