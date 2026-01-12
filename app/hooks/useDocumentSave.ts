'use client';

import { useState } from 'react';

export type SaveStatus = 'saving' | 'saved';

export function useDocumentSave() {
  const [status, setStatus] = useState<SaveStatus>('saved');

  const saveDocument = () => {
    setStatus('saving');

    // simulate API save
    setTimeout(() => {
      setStatus('saved');
    }, 800);
  };

  return {
    status,
    saveDocument,
  };
}
