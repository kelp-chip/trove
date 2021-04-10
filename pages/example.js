import Head from 'next/head';
import dark from '../styles/base-dark.module.css';
import light from '../styles/base-light.module.css';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/index';


export default function Home() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(light);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/collections')
  //     .then(result => result.json())
  //     .then(data => setData(data))
  //     .catch(err => console.error(err));
  // }, []);

  const click = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  return (
    <>

      <div className={theme.page}>
        <h1>The Theme is {theme === dark ? 'Dark' : 'Light'}</h1>
        <div>
          <button onClick={click}>theme changer</button>
          <strong>Buttons</strong>
          <button className={theme.editBtn}>edit item</button>
          <button className={theme.closeBtn}>close item</button>
          <button className={theme.saveBtn}>save item</button>
          <button className={theme.cancelBtn}>cancel</button>
          <button className={theme.deleteBtn}>delete collection</button>
          <button className={theme.addFieldBtn}>+ add a field</button>
        </div>

        <strong>Cards</strong><br />
            Collections
            <div className="container">
          <div className={`${theme.redCollectionCard} card`} > Birds</div>
          <div className={`${theme.blueCollectionCard} card`}>Birds</div>
          <div className={`${theme.greenCollectionCard} card`}>Birds</div>
          <div className={`${theme.yellowCollectionCard} card`}>Birds</div>
        </div>
            Items
            <div className="container">
          <div className={`${theme.blueItemCard} card`}>Kyle</div>
          <div className={`${theme.yellowItemCard} card`}>Joel</div>
          <div className={`${theme.redItemCard} card`}>Jay</div>
          <div className={`${theme.greenItemCard}  card`}>Sam</div>
        </div>
        <div className="tableContainer">
          <strong>Tables</strong>
          <table>
            <tr className={theme.tr}>
              <th>Row</th>
              <td>World</td>
            </tr>
            <tr className={theme.tr}>
              <th>Row</th>
              <td>World</td>
            </tr>
            <tr className={theme.tr}>
              <th>Row</th>
              <td>World</td>
            </tr>
            <tr className={theme.tr}>
              <th>Row</th>
              <td>sdlfjasldjflka asdjflkasjdf aldjflasdjf alskdjflkasjdf alsjdflajsd lkasjdlkfja lasjdflkjasdlkfj alsdjflasjdflj sadasldjflsdaj asldkjflasdfklsadfsdflaskdfklasd lasjdflkjasdlkfsadlfjlaskd jflkjasl kdfl askdjfljsadlfjasld jfsadf ldslk fjlkajds ksdj asldfjklasjdfkjafasaasfa . . .
              </td>
            </tr>
          </table>
        </div>
      </div>

    </>
  );
}
;
