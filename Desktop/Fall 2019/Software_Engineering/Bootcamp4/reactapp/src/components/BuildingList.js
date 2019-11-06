import React from 'react';

class BuilingList extends React.Component {
	selectedUpdate(id) {
		this.props.selectedUpdate(id);
	}

//create a filter on the building list constant that allows you to filter the name of the building (DONE) 
//display only the buildings that meet the filter criteria (DONE) 
//Create an onClick listener action that will allow you to click on a building name and capture the ID (DONE)

	render() {
		//console.log('This is my directory file', this.props.data);
		const { filterText, data, selectedUpdate } = this.props;

		const buildingList = data.filter(directory => {
			return (
				//if it matches the current search value
				directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			)
			}).map((directory) => {
				//only display names that match the filterText
			return (
				<tr key={directory.id}>
					<button onClick={()=>selectedUpdate(directory.id -1)}>
						<td> {directory.code} </td> 
						<td> {directory.name} </td>
					</button>
				</tr>	
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
