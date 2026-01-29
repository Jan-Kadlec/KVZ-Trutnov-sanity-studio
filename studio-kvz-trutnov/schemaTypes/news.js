export default {
  name: "news",
  title: "Aktuality",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nadpis",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "published_at",
      title: "Datum publikace",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Krátký popis",
      type: "text",
      rows: 3,
    },
    {
      name: "content",
      title: "Obsah",
      type: "text", // jednoduchý text místo PortableText, protože frontend ho jen zobrazuje
    },
    {
      name: "image_url",
      title: "URL obrázku",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    },
  ],
};
