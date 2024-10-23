

const filtersInstagram = {
  '1977': '1977',
  'amaro': 'amaro',
  'brannan': 'brannan',
  'earlybird': 'earlybird',
  'inkwell': 'inkwell',
  'kalvin': 'kalvin',
  'lo-fi': 'lo-fi',
  'nashville': 'nashville',
  'toaster': 'toaster'
};

module.exports = {
	theme: {
		filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
      ...filtersInstagram
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
	},
	variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
};