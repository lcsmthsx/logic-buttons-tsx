import React, { useState, useMemo } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../index.css';

export default function Input() {
  const [variable, setVariable] = useState<string>('');
  const [variable2, setVariable2] = useState<string>('');

  const buttonDisabled = useMemo(() => {
    if (variable.length >= 1) {
      return false;
    }
    return true;
  }, [variable]);
  const buttonDisabled2 = useMemo(() => {
    if (variable2.length >= 10) {
      return false;
    }
    return true;
  }, [variable2]);

  return (
    <div className="background">
      <div className="container">
        <div className="inputs">
          <TextField
            value={variable}
            onChange={(e) => { setVariable(e.target.value); }}
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="inputs">
          <TextField
            value={variable2}
            onChange={(e) => { setVariable2(e.target.value); }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="inputs">
          <Button variant="contained" disabled={buttonDisabled}>Esqueci minha senha</Button>
        </div>
        <div className="inputs">
          <Button variant="contained" disabled={buttonDisabled2}>Entrar</Button>
        </div>
      </div>
    </div>
  );
}
