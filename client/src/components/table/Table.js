import React from 'react';
import  { DataGrid }  from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'company', headerName: 'Company', width: 130 },
  { field: 'service', headerName: 'Service', width: 130 },
  { field: 'manager', headerName: 'Manager', width: 130 },
  {
    field: 'consumption',
    headerName: 'Consumption',
    type: 'number',
    width: 90,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, company: 'Snow', service:'Basic' , manager: 'Jon', consumption: 35 },
  { id: 2, company: 'Lannister', service:'Premium', manager: 'Cersei', consumption: 42 },
  { id: 3, company: 'Lannister', service:'Premium', manager: 'Jaime', consumption: 45 },
  { id: 4, company: 'Stark', service:'Basic' ,manager: 'Arya', consumption: 16 },
  { id: 5, company: 'Targaryen',  service:'Basic' ,manager: 'Daenerys', consumption: null },
  { id: 6, company: 'Melisandre',  service:'Basic' , manager: null, consumption: 150 },
  { id: 7, company: 'Clifford',  service:'Basic' , manager: 'Ferrara', consumption: 44 },
  { id: 8, company: 'Frances',  service:'Basic' , manager: 'Rossini', consumption: 36 },
  { id: 9, company: 'Roxie',  service:'Basic' ,  manager: 'Harvey', consumption: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}