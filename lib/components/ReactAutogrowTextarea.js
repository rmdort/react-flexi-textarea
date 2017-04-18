import React from 'react'

export default class TextArea extends React.Component {
	autoGrow () {
		var el = this.el
		var offset= !window.opera ? (el.offsetHeight - el.clientHeight) : (el.offsetHeight + parseInt(window.getComputedStyle(el, null).getPropertyValue('border-top-width')))
		el.style.height = 'auto'
		el.style.height = (el.scrollHeight  + offset ) + 'px'
	};
	componentDidMount(){
		this.autoGrow()
	}
	registerRef = (el) => {
		this.el = el
	};
	render() {
		return (
			<textarea 
				ref={this.registerRef}
				onInput = {this.autoGrow}
				{...this.props}
			/>
		)
	}

}
