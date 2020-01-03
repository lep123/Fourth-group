import React, { Component } from 'react'
import './styles.less'
export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bool: true
		}
	}
	err = () => {
		this.setState({
			bool: false
		})
	}
	vframe = () => {
		this.setState({
			bool: true
		})
	}
	render() {
		const { bool } = this.state
		return (
			<>
				{
					bool ?
						<div className="frames">
							<header>
								NEED MONE TEMPLATES?
                    <span className="err" onClick={this.err}>×</span>
							</header>
							<section>
								<h2>Shards Dashboard Pro</h2>
								<p>
									A asfsa asfsd erger oin iunhwef wrefweni niunwe mkoi
                    </p>
								<button className="btn">Done</button>
							</section>
						</div>
						:
						<header className="rfamhead" onClick={this.vframe}>
							NEED MONE TEMPLATES?
								<span className="err" onClick={this.err}>√</span>
						</header>
				}
			</>
		)

	}
}
