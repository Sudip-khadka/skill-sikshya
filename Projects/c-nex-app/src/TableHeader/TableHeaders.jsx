import React from 'react'
import BasicSelect from './DropDown'
import './Table.css'
import SearchAppBar from './SearchBar'
import DateRange from './DatePicker'

function TableHeaders() {
  return (
    <div className='table-headers'>
        <div className="show-rows-per-page">
        <h3>Show</h3>
      <BasicSelect/>
      <h3>Per Pages</h3>
        </div>
        <div className="table-header-search">
            <SearchAppBar/>
        </div>
        <div className="date-picker">
          <DateRange/>
        </div>
    </div>
  )
}

export default TableHeaders
