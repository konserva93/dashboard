import { DataSet } from '@src/types/dataset';
import React from 'react';

interface IDashboardProps {
  data: DataSet,
}

export function Dashboard({ data }: IDashboardProps) {
  return <div>{JSON.stringify(data)}</div>;
}
