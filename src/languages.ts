interface LanguageTexts {
    current_language: string;
    services: string;
    questions: string;
    about_us: string;
    examples: string;
    printing_explained: {
        what_is_a_3d_printer_header: string,
        what_is_a_3d_printer_text: string
    };
}

const languages: { [key: string]: LanguageTexts } = {
    en: {
        current_language: "EN",
        services: "Services",
        questions: "Questions",
        about_us: "About Us",
        examples: "Examples",
        printing_explained: {
            what_is_a_3d_printer_header: "What is a 3D Printer?",
            what_is_a_3d_printer_text: "Imagine a magical box that can create almost anything you dream of! That's a 3D printer. It's like a wizard's wand for inventors, designers, and hobbyists, turning digital designs into real-life objects."
        }
        },
    es: {
        current_language: "ES",
        services: "Servicios",
        questions: "Preguntas",
        about_us: "Sobre Nosotros",
        examples: "Ejemplos",
        printing_explained: {
            what_is_a_3d_printer_header: "¿Qué es una Impresora 3D?",
            what_is_a_3d_printer_text: "¡Imagina una caja mágica que puede crear casi cualquier cosa que imagines! Eso es una impresora 3D. Es como una varita mágica para inventores, diseñadores y aficionados, convirtiendo diseños digitales en objetos reales."
        } }
};

export default languages;