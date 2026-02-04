export default {
  name: 'result',
  title: 'Výsledky',
  type: 'document',

  fields: [
    {
      name: 'event_name',
      title: 'Název soutěže',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'location',
      title: 'Místo',
      type: 'string',
    },
    {
      name: 'event_date',
      title: 'Datum',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'description',
      title: 'Popis / shrnutí',
      type: 'text',
      rows: 4,
    },

    // ===== PDF PROPOZICE =====
    {
      name: 'proposition_pdf_url',
      title: 'Propozice (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },

    // ===== PDF VÝSLEDKY =====
    {
      name: 'results_pdf_url',
      title: 'Výsledky (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },

    // ===== FOTKY =====
    {
      name: 'photos_url',
      title: 'Fotografie',
      type: 'image',
    },
  ],
}
