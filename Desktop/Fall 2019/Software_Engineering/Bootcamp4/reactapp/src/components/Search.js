import React from 'react';

// Capture the text that is typed into the textbox and store this value using the filterUpdate() function (DONE)
// Use the onChange Listener function (DONE)
// Note: You will need to understand how to use ref values from form inputs (DONE)

class Search extends React.Component {
	filterUpdate() {
		this.props.filterUpdate(this.filterVal.value);
	}
	render() {
		// const {filterVal, filterUpdate } = this.props;
		return (
			<form>
				<input class = "searchBar"
				type="text" 
				ref={(value) => {this.filterVal = value}}
				placeholder="Type to filter.."
				onChange={this.filterUpdate.bind(this)} 
				/>
			</form>
		);
	}
}
export default Search;
