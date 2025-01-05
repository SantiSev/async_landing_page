interface LanguageTexts {
  change_language: string;
  services: string;
  services_text: {
    header: string;
    text: string;
  }[];
  questions: string;
  about_us: string;
  examples: string;
  printing_explained: {
    header: string;
    text: string;
  }[];
  our_prints: string;
  contact_us: string;
  created_by: string;
  form_header: string;
  form_questions: string[];
}

const languages: { [key: string]: LanguageTexts } = {
  en: {
    change_language: "ES",
    services: "Services",
    services_text: [
      {
        header: "Choose one of our designs!",
        text: "We can customize them in size and color according to your preferences.",
      },
      {
        header: "Have your own idea?",
        text: "We can print it! Share your specifications with us.",
      },
      {
        header: "Not sure what to print?",
        text: "Contact us, and we'll help you find the perfect idea.",
      },
    ],
    questions: "Questions",
    about_us: "About Us",
    examples: "Examples",
    printing_explained: [
      {
        header: "What is a 3D Printer?",
        text: "Imagine a magical box that can create almost anything you dream of! That's a 3D printer, a powerful tool with the ability to turn any idea you have into reality.",
      },
      {
        header: "How Does It Work?",
        text: "A 3D printer uses a roll of plastic called 'filament', which works like ink in a conventional printer. The filament can be made of different materials, like PLA or even more flexible plastics like TPU.",
      },
      {
        header: "What Can You Create?",
        text: "The possibilities are endless! With a 3D printer, you can create toys, stands for your devices, collectible figures, and much more. What will you create?",
      },
      {
        header: "Where to get started",
        text: "Here are the most popular websites to get started with 3D printing. You can find a wide variety of models to print, from toys to useful tools.",
      },
    ],
    our_prints: "Our Prints",
    contact_us: "Contact Us",
    created_by: "Created by Santiago Sevitz, 2025",
    form_header: "Click here to contact us!",
    form_questions: [
      "Check our shipping!",
      "Check our prices!",
      "Check our products!",
    ],
  },
  es: {
    change_language: "EN",
    services: "Servicios",
    services_text: [
      {
        header: "¡Elige uno de nuestros diseños!",
        text: "Podemos personalizarlos en tamaño y color según tus preferencias.",
      },
      {
        header: "¿Tienes una idea propia?",
        text: "¡Podemos imprimirla! Comparte con nosotros tus especificaciones.",
      },
      {
        header: "¿No sabes qué imprimir?",
        text: "Contáctanos y te ayudaremos a encontrar la idea perfecta.",
      }
    ],
    questions: "Preguntas",
    about_us: "Sobre Nosotros",
    examples: "Ejemplos",
    printing_explained: [
      {
        header: "¿Qué es una Impresora 3D?",
        text: "¡Imagina una caja mágica que puede crear casi cualquier cosa que sueñes! Eso es una impresora 3D, una poderosa herramienta con la capacidad de convertir en realidad cualquier idea que tengas.",
      },
      {
        header: "¿Cómo Funciona?",
        text: "Una impresora 3D utiliza un rollo de plástico llamado 'filamento', que funciona como la tinta en una impresora convencional. El filamento puede ser de diferentes materiales, como PLA o incluso plásticos más flexibles como TPU.",
      },
      {
        header: "¿Qué Puedes Crear?",
        text: "¡Las posibilidades son infinitas! Con una impresora 3D, puedes crear juguetes, soportes para tus dispositivos, figuras de colección y mucho más. ¿Qué vas a crear tú?",
      },
      {
        header: "Dónde comenzar",
        text: "Aquí están los sitios web más populares para comenzar con la impresión 3D. Puedes encontrar una amplia variedad de modelos para imprimir, desde juguetes hasta herramientas útiles.",
      }
    ],
    our_prints: "Nuestras Impresiones",
    contact_us: "Contacto",
    created_by: "Creado por Santiago Sevitz, 2025",
    form_header: "¡Ingresa aquí para contactarnos!",
    form_questions: [
      "¡Consulta nuestros envíos!",
      "¡Consulta nuestros precios!",
      "¡Consulta nuestros productos!",
    ],
  },
};

export default languages;
