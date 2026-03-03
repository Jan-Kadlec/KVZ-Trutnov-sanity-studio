export default {
  name: 'user',
  title: 'Uživatel',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Uživatelské jméno',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'password',
      title: 'Heslo (SHA‑256 hash)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Uložený hash hesla; před vložením vygenerujte SHA‑256 hash',
    },
  ],
}
