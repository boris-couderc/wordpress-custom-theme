import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'
import { withSelect } from '@wordpress/data'

import './style.scss'

import Edit from './edit'
import save from './save'

import mstrategieIcon from './custom-icon'

registerBlockType('mstrategie/blog', {
	apiVersion: 2,
	title: 'Derniers articles',
	category: 'text',
	icon: mstrategieIcon,

	edit: withSelect((select) => {
		return {
			posts: select('core').getEntityRecords('postType', 'post', {
				per_page: 3,
			}),
		}
	})(Edit),

	save,
})
