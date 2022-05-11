import { Tooltip, IconButton } from '@mui/material';
import { useState } from 'react';
import i18n from '../../utils/i18n';
import Iconify from '../Iconify';

export default function LanguageModeSwitch() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLanguage == 'de-DE' ? 'en-US' : 'de-DE');
  };

  i18n.on('languageChanged', (newLanguage) => {
    setCurrentLanguage(newLanguage);
  });

  return (
    <Tooltip
      title={currentLanguage == 'de-DE' ? 'Switch to English' : 'Switch to German'}>
      <IconButton onClick={toggleLanguage}>
        <Iconify
          icon={
            currentLanguage == 'de-DE'
              ? 'twemoji:flag-germany'
              : 'twemoji:flag-us-outlying-islands'
          }
        />
      </IconButton>
    </Tooltip>
  );
}
