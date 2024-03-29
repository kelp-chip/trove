import {useAppContext} from '../../pages/appContext.js';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {Carousel} from './Carousel.js';

export default function ItemView({items, name, selectedItem, unselect}) {

  const {theme} = useAppContext();
  var images = ['https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'];
  const tableData = selectedItem ? selectedItem[0].information.map(info => (<tr className={theme.tr}><th>{info.key}</th><td>{info.value}</td></tr>)) : <span> loading..</span>
  if (selectedItem && selectedItem[0].images.length > 0) {
    images = selectedItem[0].images
  }

  return (
      <>
      <div className="page-header">
          <div className="path">
              <Link href='/'><span className="passed">your collections / </span></Link>
              <span onClick={unselect} className="passed">{name} / </span>
              {selectedItem[0].name}
          </div>
          <div>
          <button className={theme.editBtn}>add item</button>
          <button className={theme.closeBtn} onClick={unselect}>close</button>
          </div>
        </div>
    <div className='item-view-container'>
    <div className='aside'>
        <div>
        {items}
        </div>
    </div>
    <div className='item'>
        <div className='item-inner-container'>
          <Carousel images={images}/>
            <table>
            {tableData ? tableData : <span> Loading</span>}
          </table>
        </div>
    </div>
    </div>
    </>
  )
}