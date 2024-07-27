interface LanguageTexts {
    current_language: string;
    services: string;
    questions: string;
    about_us: string;
    examples: string;
}

const languages: { [key: string]: LanguageTexts } = {
    en: {
        current_language: "EN",
        services: "Services",
        questions: "Questions",
        about_us: "About Us",
        examples: "Examples",
    },
    es: {
        current_language: "ES",
        services: "Servicios",
        questions: "Preguntas",
        about_us: "Sobre Nosotros",
        examples: "Ejemplos",
    }
};

export default languages;