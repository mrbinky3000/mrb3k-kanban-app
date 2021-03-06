import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do Laundry'
				}
			]
		};
	}

	render() {
		const notes = this.state.notes;
		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<Notes notes={notes} />
			</div>
		)
	}

	// We are using an experimental feature know as property
	// initializer here. It allows us to bind the method `this`
	// to point at our *App* instacne.
	//
	// Alternatively we could `bind` at `constructor` using
	// a line, such as this.addNote = this.addNote.bind(this);

	addNote = () => {
		// It would be possible to write this in an imperative style.
		// I.E, through `this.state.notes.push` and then
		// `this.setState({notes: this.state.notes})` to commit.
		//
		// I tend to facor functional style whenever that makes sense.
		// Even though it might take more code sometimes, I feel
		// the benefites (easy to readson about, no side effects)
		// more than make up for it.
		//
		// Libraries, such as Immutable.js, go a notch further.
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New task'
			}])
		});
	};
}
