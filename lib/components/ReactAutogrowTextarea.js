import React from 'react'

export default class TextArea extends React.Component {
	autoGrow () {
		var el = this.refs.textarea
		var offset= !window.opera ? (el.offsetHeight - el.clientHeight) : (el.offsetHeight + parseInt(window.getComputedStyle(el, null).getPropertyValue('border-top-width')))
		el.style.height = 'auto'
		el.style.height = (el.scrollHeight  + offset ) + 'px'
	};
	componentDidMount(){
		this.autoGrow()
	}
	render() {
		return (
			<textarea 
				ref="textarea"
				onInput = {this.autoGrow}
				{...this.props}
			/>
		)
	}

}
