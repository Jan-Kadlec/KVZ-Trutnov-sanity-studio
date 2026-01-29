export default {
  name: "siteSettings",
  title: "Nastavení webu",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Název webu",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta popis (SEO)",
      type: "text",
      rows: 3,
    },
    {
      name: "contactEmail",
      title: "Kontaktní email",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefon",
      type: "string",
    },
  ],
};
