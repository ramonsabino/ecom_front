import { TextField } from '@material-ui/core';
import React from 'react';
import MaskedInput from 'react-text-mask';

// Componente para formatar o número de telefone
const PhoneFormat = React.forwardRef((props, ref) => {
  return (
   
     <MaskedInput
      {...props}
      ref={ref}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
});

export default PhoneFormat;
