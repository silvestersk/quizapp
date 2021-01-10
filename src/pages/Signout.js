import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const signout = () => {
  return (
    <div className='signout'>
      <AmplifySignOut />
    </div>
  );
};

export default signout;