import { Extension } from '@tiptap/core';

export const PaginationExtension = Extension.create({
  name: 'pagination',

  addGlobalAttributes() {
    return [
      {
        types: ['paragraph'],
        attributes: {
          page: {
            default: 1,
            parseHTML: element =>
              Number(element.getAttribute('data-page')) || 1,
            renderHTML: attributes => ({
              'data-page': attributes.page,
            }),
          },
        },
      },
    ];
  },
});
