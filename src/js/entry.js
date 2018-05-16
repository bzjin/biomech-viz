// D3 is included by globally by default
import debounce from 'lodash.debounce';
import isMobile from './utils/is-mobile';
import graphic from './graphic';
import graphic1 from './graphic1';
import graphic1a from './graphic1a';
import graphic2 from './graphic2';


const bodySel = d3.select('body');
let previousWidth = 0;

function resize() {
	const width = bodySel.node().offsetWidth;
	if (previousWidth !== width) {
		previousWidth = width;
		graphic.resize()
		graphic1.resize()
		graphic1a.resize()
		graphic2.resize()
	}
}

function init() {
	// add mobile class to body tag
	bodySel.classed('is-mobile', isMobile.any());
	// setup resize event
	window.addEventListener('resize', debounce(resize, 150));
	// kick off graphic code
	graphic.init()
	graphic1.init()
	graphic1a.init()
	graphic2.init()
}

init();
