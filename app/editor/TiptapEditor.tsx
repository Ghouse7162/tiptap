'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Placeholder from '@tiptap/extension-placeholder';

import { Toolbar } from './Toolbar';
import { PaginationExtension } from './extensions/paginationExtension';
import { PageBreak } from './extensions/PageBreak';
import { useDocumentSave } from '@/app/hooks/useDocumentSave';

export const TiptapEditor = () => {
  const { status, saveDocument } = useDocumentSave();
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontFamily,
      PaginationExtension,
      PageBreak,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({
        placeholder: 'Start writing your document here...'
      }),
    ],
    content: `<p></p>`, // Start blank
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none bg-white min-h-[1056px] shadow-xl mb-8 flex flex-col !max-w-none',
        style: 'width: 8.5in; padding: 96px; font-family: "Times New Roman", Times, serif;',
      },
    },
    onUpdate: ({ editor }) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        saveDocument(editor.getJSON());
      }, 1500);
    },
  });

  return (
    <div className="flex flex-col w-full items-center bg-gray-100 pb-10 min-h-screen">
      <Toolbar editor={editor} status={status} />
      <div className="mt-8 shadow-xl rounded-lg print:shadow-none print:m-0 print:w-full bg-white">
        <EditorContent editor={editor} className="p-8 page" />
      </div>
    </div>
  );
};
