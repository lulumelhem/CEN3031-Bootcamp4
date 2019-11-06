import React from 'react';

class RemoveBuilding extends React.Component { 
    render(){
        const {selectedBuilding, removeUpdate } = this.props
        return(
            <button onClick={ () => removeUpdate(selectedBuilding)}>Delete Building</button>    
        );
    }
}

export default RemoveBuilding;