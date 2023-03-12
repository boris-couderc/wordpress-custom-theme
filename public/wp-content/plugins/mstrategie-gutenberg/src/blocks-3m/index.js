import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

import mstrategieIcon from './custom-icon'

registerBlockType('mstrategie/blocks-3m', {
	apiVersion: 2,
	title: 'Blocs 3m',
	category: 'text',
	icon: mstrategieIcon,

	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.blocks-3m_title-1',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.blocks-3m_content-1',
		},
		textLink: {
			type: 'string',
			source: 'text',
			selector: 'a.blocks-3m_text-link-1',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a.blocks-3m_text-link-1',
			attribute: 'href',
		},

		title2: {
			type: 'string',
			source: 'html',
			selector: '.blocks-3m_title-2',
		},
		content2: {
			type: 'string',
			source: 'html',
			selector: '.blocks-3m_content-2',
		},
		textLink2: {
			type: 'string',
			source: 'text',
			selector: 'a.blocks-3m_text-link-2',
		},
		url2: {
			type: 'string',
			source: 'attribute',
			selector: 'a.blocks-3m_text-link-2',
			attribute: 'href',
		},

		title3: {
			type: 'string',
			source: 'html',
			selector: '.blocks-3m_title-3',
		},
		content3: {
			type: 'string',
			source: 'html',
			selector: '.blocks-3m_content-3',
		},
		textLink3: {
			type: 'string',
			source: 'text',
			selector: 'a.blocks-3m_text-link-3',
		},
		url3: {
			type: 'string',
			source: 'attribute',
			selector: 'a.blocks-3m_text-link-3',
			attribute: 'href',
		},
	},

	edit: Edit,
	save,
})
