'use client';

import './i18n';
import { useEffect } from 'react';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
  }, []);

  return <>{children}</>;
}

