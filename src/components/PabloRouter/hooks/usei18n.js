
const i18n = {
    es: {
      title: "Acerca de",
      description: "Esta es la página de About",
      link: "Ir a Home"
    },
    en: {
      title: "About",
      description: "This is the About page",
      link: "Go to Home"
    }

}

export const usei18n = (lang) => {
    return  i18n[lang] || i18n.es
}