// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;


manageTranslations({
    messagesDirectory: 'dist/messages/',
    translationsDirectory: 'node_scripts/translations/',
    languages: ['en', 'ru'], // any language you need
});