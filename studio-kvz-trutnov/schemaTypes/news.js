export default {
  name: 'news',
  title: 'Aktuality',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nadpis',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'published_at',
      title: 'Datum publikace',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Krátký popis',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Obsah',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
