import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTM = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-KWR4KXG2' 
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return null;
};

export default GTM;