import * as React from 'react';

const ButtonLogin: React.SFC = props => {
  return (
    <div className="row">
      <div className="col-md-12 text-center" style={{ marginTop: '30px' }}>
        <button className="btn btn-primary" style={{ margin: '10px' }} onClick={props.login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default ButtonLogin;
