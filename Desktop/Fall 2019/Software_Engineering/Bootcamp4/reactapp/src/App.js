import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildings: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    });
  }

  addUpdate(name, code, address, coordinates){
    const id = this.state.buildings.length +1; 
    const newBuilding = {
      id: id, 
      name: name,
      code: code, 
      address: address, 
      coordinates: coordinates
    }
    this.setState({buildings: this.state.buildings.concat(newBuilding)
    });
  }

  removeUpdate(id) {
    const { buildings } = this.state
    const newList = [
      ...buildings.slice(0, id),
      ...buildings.slice(id + 1)
      ]
    this.setState({
      buildings: newList
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        // filterVal ={this.state.filterText}
        filterUpdate= {this.filterUpdate.bind(this)}
        />
        <AddBuilding 
        addUpdate = {this.addUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data ={this.state.buildings}
                    filterText={this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              {/* <RemoveBuilding 
              selectedBuilding = {this.state.selectedBuilding}
              removeUpdate={this.removeUpdate.bind(this)}
              data ={this.state.buildings}
              /> */}
              <ViewBuilding 
                selectedBuilding = {this.state.selectedBuilding}
                data = {this.state.buildings}
                removeUpdate = {this.removeUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
