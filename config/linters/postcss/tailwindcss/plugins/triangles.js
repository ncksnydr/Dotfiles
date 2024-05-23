module.exports = {
	theme: {
    triangles: { // defaults to {}
      'left': {
        direction: 'left',      // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
        size: '1em',            // defaults to defaultSize
        height: '0.5em',        // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
        color: 'currentColor',  // defaults to defaultColor
      },
    },
  },
  variants: {
    triangles: ['responsive'], // defaults to []
  },
	options: {
	
      componentPrefix: 'c-',        // defaults to 'c-'
      defaultSize: '1em',           // defaults to '1em'
      defaultColor: 'currentColor', // defaults to 'currentColor'

	}
};