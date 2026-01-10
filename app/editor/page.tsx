'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function EditorPage() {
  const PAGE_HEIGHT = 1056 // 11in * 96px/in
  const PAGE_WIDTH = 816   // 8.5in * 96px/in
  const PAGE_PADDING = 32

  // Tiptap editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing your document here...</p>',
    editorProps: {
      attributes: {
        class: 'prose max-w-full m-0 focus:outline-none break-words',
      },
    },
    immediatelyRender: false, // SSR fix
  })

  return (
    <div className="min-h-screen bg-gray-200 p-10 flex justify-center">
      <div
        className="bg-white shadow-md p-8"
        style={{
          width: PAGE_WIDTH,
          minHeight: PAGE_HEIGHT,
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          position: 'relative',
        }}
      >
        {editor && <EditorContent editor={editor} />}
        {/* Page break indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#aaa',
          }}
        >
          <span
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '12px',
              color: '#555',
            }}
          >
            Page 1 End
          </span>
        </div>
      </div>
    </div>
  )
}
