import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

import mstrategieIcon from './custom-icon'

registerBlockType('mstrategie/homepage-hero', {
	apiVersion: 2,
	title: 'Homepage accroche',
	category: 'text',
	icon: mstrategieIcon,

	supports: {
		align: true, // On permet de jouer avec l'alignement
		align: ['left', 'right', 'center'], // Ou on choisit les alignements autorisés
	},

	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.homepage-hero_title',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.homepage-hero_text',
		},
		pictureID: {
			type: 'number',
			default: null,
		},
		pictureURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		pictureAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
	},

	edit: Edit,
	save,
})
