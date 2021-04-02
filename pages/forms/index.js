import { useAppContext } from '../appContext.js';
import AccountPreferences from '../../components/form/Preferences.js';


export default function AccountSettings() {
  const { theme } = useAppContext();

  return (
    <>
      <div className="form-header">
        <div className="path" >account settings</div>

        <button className={theme.editBtn}>save settings</button>
      </div>
      <hr></hr>
      <div className="form-container">
        <AccountPreferences />
      </div>
    </>
  );
}