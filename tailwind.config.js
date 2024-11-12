const colors = require('tailwindcss/colors');

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.teal['500'],
        secondary: colors.gray['500'],
        success: colors.green['500'],
        warning: colors.yellow['500'],
        danger: colors.red['500'],
        info: colors.blue['500'],
        light: colors.gray['100'],
      },
    },
  },
};
