import React from 'react'
import {observer,inject} from 'mobx-react'
import './style.pcss'

@inject('store')
@observer
export default class Feedback extends React.Component{
	componentDidMount(){
		this.props.store.init()
	}
	submitGoalHandler = evt =>{
		evt.preventDefault()
		const form = evt.target
		this.props.store.feedbackStore.add({
			describe:form.desc.value
		})
		this.props.store.goHome()
	}
	render(){
		return(
			<div>
				<form onSubmit={this.submitGoalHandler} autoComplete="off">
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">your suggestion:</label>
						<textarea type="text" className="form-control" classID="exampleInputPassword1" placeholder="please enter your suggestion" name="desc">
						</textarea>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}
