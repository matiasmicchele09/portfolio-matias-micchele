  /** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            // Fondos
            'main-bg': '#0d1117',         // 🌑 Fondo principal
            'secondary-bg': '#1b2430',    // 🔵 Fondo secundario/secciones alternas
            'block-bg': '#272e3f',        // Bloques sutiles sobre fondo oscuro
    
            // Colores principales
            'primary': '#a855f7',         // 🟣 Púrpura vivo
            'secondary': '#3b82f6',       // 🟦 Azul vibrante
            'magenta': '#d946ef',         // Magenta suave
    
            // Texto
            'text-main': '#e5e7eb',       // ⚪ Gris claro para texto principal
            'text-secondary': '#9ca3af',  // 🧊 Gris medio para texto secundario
          },
        fontFamily: {
           poppins: ['Poppins', 'sans-serif'],
           inter:['Inter', 'sans-serif']
        },
      },
    },
    plugins: [],
  }
  