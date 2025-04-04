/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,handlebars}",
    "./dist/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          dark: '#f9fafb'
        },
        secondary: {
          DEFAULT: '#111827',
          dark: '#e5e7eb'
        },
        accent: {
          DEFAULT: '#fbbf24',
          dark: '#d97706'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.accent.DEFAULT'),
            },
            h2: {
              color: theme('colors.accent.DEFAULT'),
            },
            h3: {
              color: theme('colors.accent.DEFAULT'),
            },
            h4: {
              color: theme('colors.accent.DEFAULT'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover': {
                color: theme('colors.accent.DEFAULT'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'td code': {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.accent.DEFAULT'),
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              borderCollapse: 'collapse',
            },
            thead: {
              color: theme('colors.gray.200'),
              borderBottomColor: theme('colors.gray.600'),
              borderBottomWidth: '1px',
            },
            'thead th': {
              verticalAlign: 'bottom',
              paddingRight: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '0.5rem',
              fontSize: '0.875em',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.700'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'baseline',
              paddingTop: '0.5rem',
              paddingRight: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '0.5rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.800'),
            h1: {
              color: theme('colors.accent.dark'),
            },
            h2: {
              color: theme('colors.accent.dark'),
            },
            h3: {
              color: theme('colors.accent.dark'),
            },
            h4: {
              color: theme('colors.accent.dark'),
            },
            strong: {
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.accent.dark'),
              '&:hover': {
                color: theme('colors.accent.dark'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.200'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'td code': {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.200'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: '#e5e7eb',
              color: '#111827',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.accent.dark'),
            },
            hr: {
              borderColor: theme('colors.gray.300'),
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              borderCollapse: 'collapse',
            },
            thead: {
              color: theme('colors.gray.900'),
              borderBottomColor: theme('colors.gray.400'),
              borderBottomWidth: '1px',
            },
            'thead th': {
              verticalAlign: 'bottom',
              paddingRight: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '0.5rem',
              fontSize: '0.875em',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.300'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'baseline',
              paddingTop: '0.5rem',
              paddingRight: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '0.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 