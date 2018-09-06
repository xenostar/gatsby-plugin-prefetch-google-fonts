import React from 'react'
import { css } from 'emotion'

export default class HomePage extends React.Component {
	render() {
		return (
			<div className={testStyles}>Test font.</div>
		)
	}
}

const testStyles = css({
	fontFamily: `Oswald`,
})