export default function Login(): JSX.Element {
  return (
    <div className="login">
      <div className="ui grid centered">
        <form>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input type="text" name="username" placeholder="Username" />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="required field">
              <div className="ui icon input">
                <input type="password" name="password" placeholder="Password" />
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
