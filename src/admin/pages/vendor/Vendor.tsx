import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import Table from '../../../components/common/Table'
import TableHead from '../../../components/common/TableHead'
import TableBody from '../../../components/common/TableBody'
import TableData from '../../../components/common/TableData'
import { tableHeadData } from './tableData'
import Button from '../../../components/common/Button'
import SearchBox from '../../../components/common/Search'
import { useNavigate } from 'react-router-dom'

const Vendor = () => {
  const navigate=useNavigate()
  return (
    <div className='w-full'>
        <div className='flex items-center justify-between'>
        <HeadingTypo className='text-3xl my-4'>Vendor Lists</HeadingTypo>
        <SearchBox className='w-[25%]'/>
        </div>
        <Table className='border-2'>
            <TableHead className='' tableHeadData={tableHeadData}/>
            <TableBody>
                <TableData className='p-2'>125353453534543</TableData>
                <TableData className='p-2'>John Doe Stor</TableData>
                <TableData className='p-2'>Kalanki,Kathmandu</TableData>
                <TableData className='p-2'>2024-03-03</TableData>
                <TableData className='p-2'>John Doe</TableData>
                <TableData className='p-2'>400</TableData>
                <TableData className='p-2'>Rs 3M</TableData>
                <TableData className='p-2'>
                    <Button onClick={()=>navigate('vendor-details')} className='bg-green-500 text-white py-2 px-4 rounded-md'>View Full Details</Button>
                </TableData>
            </TableBody>
        </Table>
    </div>
  )
}

export default Vendor