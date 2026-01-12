'use client';

import React from 'react';
import { type Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Check,
} from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { SaveStatus } from '@/app/hooks/useDocumentSave';


interface ToolbarProps {
  editor: Editor | null;
  status?: SaveStatus;
}

export const Toolbar: React.FC<ToolbarProps> = ({ editor, status = 'saved' }) => {
  if (!editor) return null;

  const fonts = [
    { name: 'Serif (Times)', value: '"Times New Roman", Times, serif' },
    { name: 'Sans (Inter)', value: 'Inter, sans-serif' },
  ];

  return (
    <div className="sticky top-16 z-20 bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-2 flex-wrap print:hidden">
      {/* Font selector */}
      <select
        className="block w-40 pl-3 pr-10 py-1.5 text-sm rounded-md border border-gray-300"
        onChange={(e) =>
          editor.chain().focus().setFontFamily(e.target.value).run()
        }
        value={
          editor.getAttributes('textStyle').fontFamily ||
          '"Times New Roman", Times, serif'
        }
      >
        {fonts.map((font) => (
          <option key={font.value} value={font.value}>
            {font.name}
          </option>
        ))}
      </select>

      <div className="h-6 w-px bg-gray-300 mx-2" />

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive('bold')
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <Bold className="w-4 h-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive('italic')
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <Italic className="w-4 h-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive('underline')
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <UnderlineIcon className="w-4 h-4" />
      </button>

      <div className="h-6 w-px bg-gray-300 mx-2" />

      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive({ textAlign: 'left' })
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <AlignLeft className="w-4 h-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive({ textAlign: 'center' })
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <AlignCenter className="w-4 h-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive({ textAlign: 'right' })
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <AlignRight className="w-4 h-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive({ textAlign: 'justify' })
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <AlignJustify className="w-4 h-4" />
      </button>

      <div className="h-6 w-px bg-gray-300 mx-2" />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive('bulletList')
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <List className="w-4 h-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(
          'p-1.5 rounded',
          editor.isActive('orderedList')
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600'
        )}
      >
        <ListOrdered className="w-4 h-4" />
      </button>

      <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
        {status === 'saving' ? 'Saving…' : <><Check size={12} /> Saved</>}
      </div>
    </div>
  );
};
