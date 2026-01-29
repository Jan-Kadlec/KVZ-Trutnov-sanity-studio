export default {
  name: "gallery",
  title: "Galerie",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Název galerie",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
    },
    {
      name: "images",
      title: "Fotografie",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt text (SEO)",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
