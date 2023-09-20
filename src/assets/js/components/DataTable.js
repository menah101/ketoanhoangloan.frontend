import DataTable from 'datatables.net-dt'

const onDataTable = () => {
  const elementDataTable = document.getElementById('dataTable')
  if (!elementDataTable) return

  new DataTable(elementDataTable, {
    language: {
      search: '',
      searchPlaceholder: 'Tìm kiếm',
      info: '',
      zeroRecords: 'Không tìm thấy dữ liệu',
    },
    lengthChange: false,
  })
}

export default onDataTable
