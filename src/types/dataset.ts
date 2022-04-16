export type DataSet = DataSetRow[];

type DataSetRow = DataSetField[];

type DataSetField = {
  [key: string]: string | number,
}
