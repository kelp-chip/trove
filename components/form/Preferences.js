import { useAppContext } from '../../pages/appContext.js';

export default function AccountPreferences() {
  const { theme } = useAppContext();
  return (
    <>
      <div className="form-top">
        <div>
          name
          <input className={theme.input}></input>
        </div>
        <div>
          email
          <input className={theme.input}></input>
        </div>
      </div>
      <hr className="bar"></hr>
      <div className="form-bottom">
        <div>
          current password
          <input className={theme.input}></input>
        </div>
        <div>
          new password
          <input className={theme.input}></input>
        </div>
        <div>
          confirm password
          <input className={theme.input}></input>
        </div>
      </div>
    </>
  );
}