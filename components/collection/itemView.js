import {useAppContext} from '../../pages/appContext.js';
import Link from 'next/link';
import {useState, useEffect} from 'react';

export default function ItemView({items, name, selectedItem}) {

  const {theme} = useAppContext();

  const tableData = selectedItem ? selectedItem[0].information.map(info => (<tr className={theme.tr}><th>{info.key}</th><td>{info.value}</td></tr>)) : <span> loading..</span>
//   const imageUrl = selectedItem.images.length > 0 ? selectedItem.images[0] : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

  return (
    <div className='item-view-container'>
    <div className='aside'>
        <div>
        {items}
        </div>
    </div>
    <div className='item'>
        <div className='item-inner-container'>
            <div className='image-carousel'></div>
            <table>
            {tableData ? tableData : <span> Loading</span>}
          </table>
        </div>


    </div>
    </div>
  )
}