'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function EditorPage() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing your document here...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl m-0 focus:outline-none',
      },
    },
    // Fix for SSR
    immediatelyRender: false,
  })

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        {editor && <EditorContent editor={editor} />}
      </div>
    </div>
  )
}
