import React from 'react';
import DropDown from '../Icons/TriangleIcon';
import InfoIcon from "../Icons/InfoIcon";

const TableData = ({item , idx}) => {
    return (
        <tr key={idx}>
      <td className="pl-3 text-[#146EB4]   border-b  py-3.5 text-sm font-medium">
        {item.id}
      </td>
      <td className="pl-3 text-sm font-normal  border-b py-3.5 text-[#1A181E]">
        {item.date}
      </td>
      <td className="pl-3 text-sm font-normal border-b py-3.5 text-right text-[#1A181E]">
        ₹{item.amount.toLocaleString()}
      </td>
      <td className="pr-3 text-sm font-normal  border-b py-3.5 text-right text-[#1A181E]">
        ₹{item.fee}
      </td>
    </tr>
    )
}

const Table = ({transactions}) => {
  return (
    <table className='w-full mt-3'>
        <thead className='px-3 bg-[#F2F2F2] text-xs font-thin'>
            <tr>
            <th className="rounded-l-[4px] pl-3 font-normal text-start py-[10px]">
                Order ID
            </th>

                <th className='flex items-center gap-x-1 text-start font-normal py-[10px] pl-3'>
                    Order Date 
                    <button>
                     <DropDown/>
                    </button>
                </th>

                <th className='font-normal py-[10px] text-right pl-3'>
                    Order Amount
                </th>

                <th className='font-normal py-[10px] rounded pl-3 text-right pr-3'>
                    <div className='flex items-center justify-end gap-x-1'>
                Transaction fees
                <InfoIcon/>
                    </div>
                </th>    
            </tr>
        </thead>
        <tbody>
            {transactions.map((item, idx) => (
                <TableData item={item} idx={idx} key={1}/>
            ))}
        </tbody>
    </table>
  )
}

export default Table