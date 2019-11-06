import React from 'react';

class AddBuilding extends React.Component { 
   
    addUpdate(){
        const name = this.name.value;
        const code = this.code.value;
        const address = this.address.value;
        const coordinates = 
        {
            latitude: this.latitude.value,
            longitude: this.longitude.value
        }
        this.props.addUpdate(name, code, address, coordinates);
    }

    render(){
        return(
            <div>
                <form>
                    <ul>Name: 
                        <input 
                        type="text" 
                        ref={(value) => {this.name = value}}
                        placeholder="Enter Name:"
                        />
                    </ul>

                    <ul> Code:
                        <input 
                        type="text" 
                        ref={(value) => {this.code = value}}
                        placeholder="Enter Code:"
                        />
                    </ul>

                    <ul>Address: 
                        <input 
                        type="text" 
                        ref={(value) => {this.address = value}}
                        placeholder="Enter Address:"
                        />
                    </ul>

                    <ul>Longitude:
                        <input 
                        type="text" 
                        ref={(value) => {this.longitude = value}}
                        placeholder="Enter Longitude:"
                        />
                    </ul>

                    <ul>Latitude: 
                        <input 
                        type="text" 
                        ref={(value) => {this.latitude = value}}
                        placeholder="Enter Latitude:"
                        />
                    </ul>
                </form>
                <div>
                    <button onClick ={this.addUpdate.bind(this)}>Add New Building</button>
                </div>
            </div>
        );
    }
}

export default AddBuilding;