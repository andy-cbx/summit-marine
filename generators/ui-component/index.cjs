const path = require('path');const fs = require('fs');/** * * @type {import('plop').PlopGenerator} */module.exports = {	description: 'UI Component Generator',	prompts: [		{			type: 'input',			name: 'name',			message: 'component name',		},	],	actions: (answers) => {		const componentGeneratePath = 'src/components/ui/{{folder}}';		return [			{				type: 'add',				path: componentGeneratePath + '/{{kebabCase name}}/index.ts',				templateFile: 'generators/ui-component/index.ts.hbs',			},			{				type: 'add',				path:					componentGeneratePath +					'/{{kebabCase name}}/{{kebabCase name}}.tsx',				templateFile: 'generators/ui-component/ui-component.hbs',			},		];	},};