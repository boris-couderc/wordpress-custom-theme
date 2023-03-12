import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

import mstrategieIcon from './custom-icon'

registerBlockType('mstrategie/mstrategie', {
	apiVersion: 2,
	title: 'Engagements mstrategie',
	category: 'text',
	icon: mstrategieIcon,

	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.mstrategie_title',
		},
		hook: {
			type: 'string',
			source: 'html',
			selector: '.mstrategie_hook',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.mstrategie_content',
		},
		text: {
			type: 'string',
			source: 'text',
			selector: 'a.mstrategie_link',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a.mstrategie_link',
			attribute: 'href',
		},
	},

	edit: Edit,
	save,
})
