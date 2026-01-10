'use client'

import { useEffect, useRef, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function EditorPage() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing your document here...</p>',
    editorProps: {
      attributes: {
        class: 'prose max-w-full m-0 focus:outline-none',
      },
    },
    immediatelyRender: false, // SSR fix
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const [pages, setPages] = useState<number[]>([1])

  useEffect(() => {
    if (!editor || !containerRef.current) return

    const handleUpdate = () => {
      const editorEl = containerRef.current!
      const contentHeight = editorEl.scrollHeight
      const pageHeight = 1056 // 11in * 96px/in

      const neededPages = Math.ceil(contentHeight / pageHeight)
      if (neededPages !== pages.length) {
        const newPages = Array.from({ length: neededPages }, (_, i) => i + 1)
        setPages(newPages)
      }
    }

    editor.on('update', handleUpdate)
    handleUpdate() // initial check

    return () => {
      editor.off('update', handleUpdate)
    }
  }, [editor, pages.length])

  return (
    <div className="min-h-screen bg-gray-200 p-10 flex justify-center">
      <div className="space-y-10">
        {pages.map((page) => (
          <div
            key={page}
            className="bg-white shadow-md p-8"
            style={{
              width: '816px', // 8.5in * 96px/in
              height: '1056px', // 11in * 96px/in
              boxSizing: 'border-box',
              border: '1px solid #ccc',
            }}
          >
            {page === 1 && editor && (
              <div ref={containerRef}>
                <EditorContent editor={editor} />
              </div>
            )}
            {page > 1 && <div className="h-full"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
