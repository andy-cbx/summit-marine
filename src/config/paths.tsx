export const paths = {	root: {		path: '',		getHref: () => '/',	},	home: {		path: '/',		getHref: () => '/',	},	/* PLOP_INJECT_PATH */
	services: {		path: 'services',		getHref: () => '/services',	},} as const;