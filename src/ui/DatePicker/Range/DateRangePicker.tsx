import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import React, { useEffect, useState } from 'react';

interface IDateRangePickerProps {
  defaultStart?: Date,
  defaultEnd?: Date,
  onChange: (range: [Date | null, Date | null]) => void;
}

export function DateRangePicker({ defaultStart, defaultEnd, onChange }: IDateRangePickerProps) {
  const [startDate, setStartDate] = useState<Date | null>(defaultStart || new Date());
  const [endDate, setEndDate] = useState<Date | null>(defaultEnd || null);
  useEffect(() => {
    onChange([startDate, endDate]);
  }, [startDate, endDate, onChange]);

  const handleRangeChange = (dates: [(Date | null), (Date | null)]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleRangeChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  );
}
