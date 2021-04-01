import {useAppContext} from '../../pages/appContext.js';
import Link from 'next/link';

export default function ItemGrid({items, name}) {
  const {theme} = useAppContext();

  return (
    <div>
    <div className={theme.page}>
      <div className="page-header">
        <div className="path">

          <Link href='/'><span className="passed">your collections / </span></Link>
            {name}
          </div>
        <button className={theme.editBtn}>add collection</button>
      </div>
      <div className="card-container">
        {items}
      </div>
    </div>
  </div>
  )
}