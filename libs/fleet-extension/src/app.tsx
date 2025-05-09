import { createColumnHelper, Table, useTable } from '@trackunit/react-table';
import { TextCell } from '@trackunit/react-table-base-components';

interface DataType {
  id: string;
  name: string;
  assetType: string;
  brand: string;
}

const defaultData: DataType[] = [
  {
    id: '1',
    name: 'SM Smoketest Asset 1',
    assetType: 'machine',
    brand: 'Manitou',
  },
  { id: '2', name: '3219', assetType: 'machine', brand: 'Skyjack' },
  { id: '3', name: '3226', assetType: 'machine', brand: 'Skyjack' },
];

const columnHelper = createColumnHelper<Partial<DataType>>();

const columns = [
  columnHelper.accessor((row) => row?.name, {
    cell: ({ row: { original } }: { row: { original: Partial<DataType> } }) => (
      <TextCell content={original?.name} />
    ),
    header: 'Name',
    id: 'name',
    size: 250,
  }),
  columnHelper.accessor((row) => row?.assetType, {
    cell: ({ row: { original } }: { row: { original: Partial<DataType> } }) => (
      <TextCell content={original?.assetType} />
    ),
    header: 'Asset Type',
    id: 'assetType',
  }),
  columnHelper.accessor((row) => row?.brand, {
    cell: ({ row: { original } }: { row: { original: Partial<DataType> } }) => (
      <TextCell content={original?.brand} />
    ),
    header: 'Brand',
    id: 'brand',
  }),
];

const pagination = {
  nextPage: () => {}, // Handle next page
  previousPage: () => {}, // Handle previous page
  isLoading: false,
  pageInfo: {
    count: defaultData.length,
  },
};

export const App = () => {
  const { table } = useTable<Partial<DataType>>({
    data: defaultData,
    columns,
    enableSorting: false,
  });

  return <Table<Partial<DataType>> {...table} pagination={pagination} />;
};
