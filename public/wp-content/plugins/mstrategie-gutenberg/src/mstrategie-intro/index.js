import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

import mstrategieIcon from './custom-icon'

registerBlockType('mstrategie/mstrategie-intro', {
	apiVersion: 2,
	title: 'intro texte',
	category: 'text',
	icon: mstrategieIcon,

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: '.intro',
		},
	},

	edit: Edit,
	save,
})
