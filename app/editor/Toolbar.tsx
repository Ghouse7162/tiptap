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
    <div className="sticky top-16 z-20 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 flex-wrap print:hidden shadow-md">
      {/* Font selector */}
      <select
        className="block w-44 pl-3 pr-10 py-2 text-sm rounded-md border border-gray-300 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
        onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
        value={editor.getAttributes('textStyle').fontFamily || '"Times New Roman", Times, serif'}
      >
        {fonts.map((font) => (
          <option key={font.value} value={font.value}>
            {font.name}
          </option>
        ))}
      </select>

      <div className="h-6 w-px bg-gray-300 mx-2" />

      {/* Formatting Buttons */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive('bold') ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Bold"
      >
        <Bold className="w-5 h-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive('italic') ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Italic"
      >
        <Italic className="w-5 h-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive('underline') ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Underline"
      >
        <UnderlineIcon className="w-5 h-5" />
      </button>

      <div className="h-6 w-px bg-gray-300 mx-2" />

      {/* Alignment Buttons */}
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive({ textAlign: 'left' }) ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Align Left"
      >
        <AlignLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive({ textAlign: 'center' }) ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Align Center"
      >
        <AlignCenter className="w-5 h-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive({ textAlign: 'right' }) ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Align Right"
      >
        <AlignRight className="w-5 h-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive({ textAlign: 'justify' }) ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Justify"
      >
        <AlignJustify className="w-5 h-5" />
      </button>

      <div className="h-6 w-px bg-gray-300 mx-2" />

      {/* List Buttons */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive('bulletList') ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Bullet List"
      >
        <List className="w-5 h-5" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(
          'p-2 rounded-md transition-all duration-150 hover:bg-purple-50 hover:text-purple-700',
          editor.isActive('orderedList') ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
        )}
        title="Numbered List"
      >
        <ListOrdered className="w-5 h-5" />
      </button>

      {/* Save Status */}
      <div className="ml-auto text-sm font-medium text-gray-700 flex items-center gap-1">
        {status === 'saving' ? (
          <span className="italic text-purple-600">Saving…</span>
        ) : (
          <>
            <Check size={14} className="text-green-600" /> Saved
          </>
        )}
      </div>
    </div>
  );
};
