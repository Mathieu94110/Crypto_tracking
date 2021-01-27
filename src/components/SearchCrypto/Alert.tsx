import React, { FC } from 'react';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return(
    <div style={{textAlign:"center"}}>
      <div onClick={onClose}></div>
      <div style={{width:'400px',height:"400px", margin:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between", border:"2px solid red",borderRadius:"10%"}}>
        <header>
          <p>{message}</p>
        </header>
        <footer style={{justifyContent: 'center'}}>
          <button onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}

export default Alert;