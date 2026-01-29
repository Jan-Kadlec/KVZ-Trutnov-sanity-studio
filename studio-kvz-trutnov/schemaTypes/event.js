export default {
  name: "event",
  title: "Akce",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Název akce",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "event_date",
      title: "Datum a čas akce",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Místo konání",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Popis",
      type: "text",
      rows: 5,
    },
    {
      name: "featured",
      title: "Zvýraznit akci",
      type: "boolean",
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: "Podle data",
      name: "dateDesc",
      by: [{ field: "event_date", direction: "desc" }],
    },
  ],
};
