const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, theme, variants }) {
  const newUtilities = {
    // Entrance Animations
    '.bahlil-masuk': {
      animation: 'bahlil-masuk 0.5s ease-out forwards',
    },
    '.bahlil-masuk-atas': {
      animation: 'bahlil-masuk-atas 0.5s ease-out forwards',
    },
    '.bahlil-masuk-bawah': {
      animation: 'bahlil-masuk-bawah 0.5s ease-out forwards',
    },
    '.bahlil-masuk-kiri': {
      animation: 'bahlil-masuk-kiri 0.5s ease-out forwards',
    },
    '.bahlil-masuk-kanan': {
      animation: 'bahlil-masuk-kanan 0.5s ease-out forwards',
    },
    '.bahlil-zoom-masuk': {
      animation: 'bahlil-zoom-masuk 0.5s ease-out forwards',
    },
    '.bahlil-muncul': {
      animation: 'bahlil-muncul 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
    },

    // Exit Animations
    '.bahlil-keluar': {
      animation: 'bahlil-keluar 0.5s ease-in forwards',
    },
    '.bahlil-keluar-atas': {
      animation: 'bahlil-keluar-atas 0.5s ease-in forwards',
    },
    '.bahlil-keluar-bawah': {
      animation: 'bahlil-keluar-bawah 0.5s ease-in forwards',
    },
    '.bahlil-zoom-keluar': {
      animation: 'bahlil-zoom-keluar 0.5s ease-in forwards',
    },
    '.bahlil-kabur': {
      animation: 'bahlil-kabur 0.5s ease-in forwards',
    },

    // Attention Animations
    '.bahlil-goyang': {
      animation: 'bahlil-goyang 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
    },
    '.bahlil-getar': {
      animation: 'bahlil-getar 0.5s linear infinite',
    },
    '.bahlil-kedip': {
      animation: 'bahlil-kedip 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    '.bahlil-mental': {
      animation: 'bahlil-mental 1s infinite',
    },
    '.bahlil-loncat': {
      animation: 'bahlil-loncat 1s ease infinite',
    },
    '.bahlil-angguk': {
      animation: 'bahlil-angguk 1s ease-in-out infinite',
    },
    '.bahlil-geleng': {
      animation: 'bahlil-geleng 1s ease-in-out infinite',
    },

    // Loop Animations
    '.bahlil-muter': {
      animation: 'bahlil-muter 1s linear infinite',
    },
    '.bahlil-ngambang': {
      animation: 'bahlil-ngambang 3s ease-in-out infinite',
    },
    '.bahlil-napas': {
      animation: 'bahlil-napas 3s ease-in-out infinite',
    },
    '.bahlil-ombak': {
      animation: 'bahlil-ombak 2s ease-in-out infinite',
    },

    // Modifiers
    '.bahlil-cepat': {
      'animation-duration': '0.2s !important',
    },
    '.bahlil-lambat': {
      'animation-duration': '0.8s !important',
    },
    '.bahlil-santai': {
      'animation-timing-function': 'ease-out !important',
    },
    '.bahlil-delay-1': { 'animation-delay': '0.1s' },
    '.bahlil-delay-2': { 'animation-delay': '0.2s' },
    '.bahlil-delay-3': { 'animation-delay': '0.3s' },
    '.bahlil-delay-4': { 'animation-delay': '0.4s' },
    '.bahlil-delay-5': { 'animation-delay': '0.5s' },
  }

  addUtilities(newUtilities, variants('animation'))
}, {
  theme: {
    extend: {
      keyframes: {
        'bahlil-masuk': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'bahlil-masuk-atas': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'bahlil-masuk-bawah': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'bahlil-masuk-kiri': {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'bahlil-masuk-kanan': {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'bahlil-zoom-masuk': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'bahlil-muncul': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bahlil-keluar': {
          'from': { opacity: '1' },
          'to': { opacity: '0' },
        },
        'bahlil-keluar-atas': {
          'from': { opacity: '1', transform: 'translateY(0)' },
          'to': { opacity: '0', transform: 'translateY(-20px)' },
        },
        'bahlil-keluar-bawah': {
          'from': { opacity: '1', transform: 'translateY(0)' },
          'to': { opacity: '0', transform: 'translateY(20px)' },
        },
        'bahlil-zoom-keluar': {
          'from': { opacity: '1', transform: 'scale(1)' },
          'to': { opacity: '0', transform: 'scale(0.9)' },
        },
        'bahlil-kabur': {
          'from': { opacity: '1', filter: 'blur(0)' },
          'to': { opacity: '0', filter: 'blur(10px)' },
        },
        'bahlil-goyang': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        'bahlil-getar': {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
        },
        'bahlil-kedip': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'bahlil-mental': {
          '0%, 100%': { transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'bahlil-loncat': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        'bahlil-angguk': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'bahlil-geleng': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
        'bahlil-muter': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'bahlil-ngambang': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bahlil-napas': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'bahlil-ombak': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      }
    }
  }
})
