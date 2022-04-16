import { DashboardConfiguration } from '../types/dashboard';
import { DataSet } from '../types/dataset';

interface IDashboardProps {
  data?: DataSet,
  configuration: DashboardConfiguration,
}

export function Dashboard({ data, configuration }: IDashboardProps) {
  // eslint-disable-next-line no-console
  console.log(data, configuration);
  return null;
}
