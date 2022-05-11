import { useEffect, useState } from 'react';

export default function useViewport() {
  const [isMobile, setMobile] = useState(true);
  const [isTablet, setTablet] = useState(true);
  const [isDesktop, setDesktop] = useState(true);

  useEffect(() => {}, [window.innerWidth]);
}
