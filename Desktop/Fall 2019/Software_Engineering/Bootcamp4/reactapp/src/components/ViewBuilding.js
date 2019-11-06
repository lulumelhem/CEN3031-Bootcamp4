import React from 'react';
import RemoveBuilding from './RemoveBuilding';

// Capture building ID to look-up the additional information for the building (DONE)
// Return additional detaials of the building to be rendered on the screen for the user (DONE)

class ViewBuilding extends React.Component {
	removeUpdate(){
		this.props.removeUpdate(this.props.selectedBuilding);
	}

	render() {
		const {data, selectedBuilding} = this.props; 
		const name = data[selectedBuilding].name;
		const code = data[selectedBuilding].code;
		const address = data[selectedBuilding].address;

		let latitude = '';
		let longitude = '';

		if (data[selectedBuilding].coordinates)
		{
			latitude = data[selectedBuilding].coordinates.latitude;
			longitude = data[selectedBuilding].coordinates.longitude;
		}

		if (!selectedBuilding){
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
		}
		else{
			return(
				<div>
				<p>
					{' '}
					<ul>Name: {name}</ul>
					<ul>Code: {code}</ul>
					<ul>Address: {address}</ul>
					<ul>Longitude: {longitude}</ul>
					<ul>Latitude: {latitude}</ul>
				</p>
				<RemoveBuilding removeUpdate={this.removeUpdate.bind(this)}/>
			</div>
			);
		}
	}
}
		
		

// class ViewBuilding extends React.Component {
// 	render() {
// 		const { data, selectedBuilding } = this.props
// 		const {code, name, coordinates, address} = data[selectedBuilding]
// 		const idList = 
// 		(
// 				<li key={selectedBuilding-1}>
// 					<li>Code: {code}</li>
// 					<li>Name: {name}</li>
// 					<li>Coordinates:
// 						{coordinates &&
// 						<ul>
// 							<li>Latitude: {coordinates.latitude}</li>
// 							<li>Longitude: {coordinates.longitude}</li>
// 						</ul>
// 						}
// 					</li>
// 					<li>Address: {address}</li>
// 				</li>
				
// 			)
		

export default ViewBuilding;
