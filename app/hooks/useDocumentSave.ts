'use client';

import { useState } from 'react';
import { Editor } from '@tiptap/react';

export type SaveStatus = 'saved' | 'saving';

export const useDocumentSave = () => {
  const [status, setStatus] = useState<SaveStatus>('saved');

  const saveDocument = (content: any) => {
    setStatus('saving');

    // Simulate saving delay
    setTimeout(() => {
      console.log('Document saved:', content);
      setStatus('saved');
    }, 1000);
  };

  return { status, saveDocument };
};
