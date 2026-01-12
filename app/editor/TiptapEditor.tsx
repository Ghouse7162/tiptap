'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';

import { Toolbar } from './Toolbar';
import { PaginationExtension } from './extensions/paginationExtension';
import { PageBreak } from './extensions/PageBreak';

import { useDocumentSave } from '@/app/hooks/useDocumentSave';

export const TiptapEditor = () => {
  const { status, saveDocument } = useDocumentSave();
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontFamily,
      PaginationExtension,
      PageBreak,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
      <h2>O-1A Visa Case Strategy</h2>
      <p><strong>Beneficiary:</strong> Mr. Atal Agarwal</p>
      <p><strong>Visa Classification:</strong> O-1A</p>
      <p><strong>Date:</strong> January 9, 2026</p>
      <p>Case overview content goes here...</p>
      <p>Additional content to test pagination...</p>
    `,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none bg-white min-h-[1056px] shadow-xl mb-8 flex flex-col !max-w-none',
        style:
          'width: 8.5in; padding: 96px; font-family: "Times New Roman", Times, serif;',
      },
    },
    onUpdate: () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        saveDocument(); // ✅ NO ARGUMENT
      }, 1500);
    },
  });

  return (
    <div className="flex flex-col w-full items-center bg-[#F3F4F6] pb-10">
      <Toolbar editor={editor} status={status} />
      <div className="mt-8 shadow-xl print:shadow-none print:m-0 print:w-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
