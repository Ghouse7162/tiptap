**Document Pagination Editor (Tiptap + Next.js)**

This project is a prototype built as part of the Full-Stack Intern Assignment for OpenSphere / LegalBridge.

The goal of the assignment is to design and build a Tiptap-based document editor with real-time pagination, allowing users to see exactly how their legal documents will appear when printed — similar to Google Docs or Microsoft Word.

🚀 Features Implemented
✅ Real-Time Pagination

Documents are visually split into distinct pages

Page boundaries update dynamically as users type, delete, or paste content

Clear separation between pages to reflect printed layout

✅ Print-Accurate Layout

A4 page size

1-inch margins

What you see in the editor matches what appears when printing (Ctrl + P)

✅ Rich Text Editing

Headings and paragraphs

Bold, italic, underline

Text alignment (left, center, right, justify)

Bullet and numbered lists

Font family selection

✅ UX Improvements

Placeholder text: “Start writing your document…”

Placeholder disappears on first click

Sticky, modern toolbar

Visual page shadows and spacing similar to document editors

🧠 Approach to Pagination

Pagination is implemented by:

Defining a fixed page height based on A4 dimensions

Measuring rendered content height in the DOM

Automatically inserting visual page breaks when content exceeds a page

Recalculating page layout on every editor update to ensure correct reflow

This ensures:

Long paragraphs flow naturally across pages

Editing content in the middle of a document reflows subsequent pages

Formatting changes (font size, lists, headings) update pagination correctly

⚠️ Trade-offs & Limitations

Pagination is calculated on the client using DOM measurements, which may have minor performance overhead for very large documents

Table pagination is basic and can be improved further

Header/footer support is not implemented (optional enhancement)

🔮 What I Would Improve With More Time

Add page numbers and headers/footers

Optimize pagination recalculation for very long documents

Improve table and image pagination behavior

Add export to PDF/DOCX using the same layout engine

🛠️ Tech Stack

Frontend: Next.js (App Router), React

Editor: Tiptap

Styling: Tailwind CSS

Language: TypeScript

▶️ Running the Project Locally
Prerequisites

Node.js (v18 or later)

npm

Steps
# Clone the repository
git clone https://github.com/Ghouse7162/tiptap.git

# Navigate to the project directory
cd tiptap_next

# Install dependencies
npm install

# Run the development server
npm run dev


Open your browser and visit:

http://localhost:3000/editor

🧪 Product Context

To better understand the real-world problem, I explored the existing LegalBridge drafting editor.
While it supports rich text formatting, it does not visually indicate page boundaries, making it difficult for users to predict how documents will appear when printed for USCIS submission.

This prototype directly addresses that gap by introducing real-time pagination inside the editor.
