class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },

                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },

                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },

                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },

                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },

                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },

            ]
        };
    }

    render() {
        return (
           <div>
              <table>
                 <tbody>
                    {this.state.cars.map((person, i) => <Car key = {i} 
                       cars = {person} />)}
                 </tbody>
              </table>
           </div>
        );
     }
}

class Car extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.cars.manufacturer}</td>
                <td>{this.props.cars.model}</td>
                <td>{this.props.cars.year}</td>
                <td>{this.props.cars.stock}</td>
                <td>{this.props.cars.price}</td>
            </tr>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))


// incrementStock() {
//     this.setState((prevState) => {
//         console.log(this.state.cars[0].stock);
//         return {
//             cars: prevState.cars[1].stock + 1
            
//         };
//     });
// }