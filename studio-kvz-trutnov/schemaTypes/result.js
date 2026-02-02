export default {
  name: 'result',
  title: 'Výsledky',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Název soutěže',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Datum',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Místo',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Popis / shrnutí',
      type: 'text',
      rows: 4,
    },
    {
      name: 'results',
      title: 'Výsledková listina',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Jméno', type: 'string'},
            {name: 'position', title: 'Umístění', type: 'number'},
            {name: 'score', title: 'Body', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'proposition_file',
      title: 'Propozice (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },
    {
      name: 'results_file',
      title: 'Výsledky (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },
    {
      name: 'photos',
      title: 'Fotografie (obrázek)',
      type: 'image',
    },
  ],
}
