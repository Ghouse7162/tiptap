**Document Pagination Editor (Tiptap + Next.js)**

Prototype built for the Full-Stack Intern Assignment – OpenSphere / LegalBridge.

This project demonstrates a Tiptap-based rich text editor with real-time pagination, similar to Google Docs / MS Word, designed for print-accurate legal documents.

**▶️ Run Locally (Quick Start)**
Prerequisites

Node.js v18+

npm

Setup
git clone https://github.com/Ghouse7162/tiptap.git
cd tiptap_next
npm install
npm run dev


**Open:**

http://localhost:3000/editor

**👀 What to Observe**

Document content is split into visual pages

Page breaks update in real time as you type, delete, or paste

A4 page size with 1-inch margins

Layout matches browser print preview (Ctrl + P)

Editing content in the middle reflows pages correctly

✨ Supported Formatting

Headings & paragraphs

Bold / italic / underline

Text alignment (left, center, right, justify)

Bullet & numbered lists

Font family selection

🧠 Pagination Approach (Brief)

Fixed A4 page height is defined

Rendered DOM content height is measured

Visual page breaks are inserted when content exceeds a page

Pagination recalculates on every editor update

This allows long paragraphs and mixed formatting to flow naturally across pages.

**⚠️ Limitations**

Client-side DOM measurement may impact performance for very large documents

Table pagination is basic

No header/footer or page numbers (optional enhancements)

**🛠️ Tech Stack**

Next.js (App Router), React

Tiptap

Tailwind CSS

TypeScript
