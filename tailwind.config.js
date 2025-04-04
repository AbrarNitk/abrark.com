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
          DEFAULT: '#2563EB',
          dark: '#38BDF8'
        },
        secondary: {
          DEFAULT: '#7C3AED',
          dark: '#C4B5FD'
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#FBBF24'
        },
        success: {
          DEFAULT: '#059669',
          dark: '#10B981'
        },
        error: {
          DEFAULT: '#DC2626',
          dark: '#F87171'
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#EFF6FF',
          dark: '#0F172A',
          darkSecondary: '#1E293B'
        },
        text: {
          DEFAULT: '#1F2937',
          heading: '#111827',
          dark: '#E2E8F0',
          darkHeading: '#F8FAFC'
        },
        border: {
          DEFAULT: '#CBD5E1',
          dark: '#475569'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.DEFAULT'),
            h1: {
              color: theme('colors.text.heading'),
            },
            h2: {
              color: theme('colors.text.heading'),
            },
            h3: {
              color: theme('colors.text.heading'),
            },
            h4: {
              color: theme('colors.text.heading'),
            },
            strong: {
              color: theme('colors.text.heading'),
            },
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.text.DEFAULT'),
              backgroundColor: theme('colors.background.secondary'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'td code': {
              color: theme('colors.text.DEFAULT'),
              backgroundColor: theme('colors.background.secondary'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: theme('colors.background.secondary'),
              color: theme('colors.text.DEFAULT'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            blockquote: {
              color: theme('colors.text.DEFAULT'),
              borderLeftColor: theme('colors.accent.DEFAULT'),
            },
            hr: {
              borderColor: theme('colors.border.DEFAULT'),
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
              color: theme('colors.text.heading'),
              borderBottomColor: theme('colors.border.DEFAULT'),
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
              borderBottomColor: theme('colors.border.DEFAULT'),
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
            color: theme('colors.text.dark'),
            h1: {
              color: theme('colors.text.darkHeading'),
            },
            h2: {
              color: theme('colors.text.darkHeading'),
            },
            h3: {
              color: theme('colors.text.darkHeading'),
            },
            h4: {
              color: theme('colors.text.darkHeading'),
            },
            strong: {
              color: theme('colors.text.darkHeading'),
            },
            a: {
              color: theme('colors.primary.dark'),
              '&:hover': {
                color: theme('colors.primary.dark'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.text.dark'),
              backgroundColor: theme('colors.background.darkSecondary'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'td code': {
              color: theme('colors.text.dark'),
              backgroundColor: theme('colors.background.darkSecondary'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: theme('colors.background.darkSecondary'),
              color: theme('colors.text.dark'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            blockquote: {
              color: theme('colors.text.dark'),
              borderLeftColor: theme('colors.accent.dark'),
            },
            hr: {
              borderColor: theme('colors.border.dark'),
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
              color: theme('colors.text.darkHeading'),
              borderBottomColor: theme('colors.border.dark'),
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
              borderBottomColor: theme('colors.border.dark'),
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