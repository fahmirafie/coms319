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

    incrementStock() {
        let tmp = [...this.state.cars];
        let stock = {...tmp[0]};
        // stock++;
        // this.setState({tmp,});
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>manufacturer</th>
                        <th>model</th>
                        <th>year</th>
                        <th>stock</th>
                        <th>price</th>
                        <th>Option</th>
                    </tr>
                    <tr>
                        <td>{this.state.cars[0].manufacturer}</td>
                        <td>{this.state.cars[0].model}</td>
                        <td>{this.state.cars[0].year}</td>
                        <td>{this.state.cars[0].stock}</td>
                        <td>${this.state.cars[0].price}.00</td>
                        <td><button onclick={this.incrementStock()}>Increment</button></td>
                    </tr>
                    <tr>
                        <td>{this.state.cars[1].manufacturer}</td>
                        <td>{this.state.cars[1].model}</td>
                        <td>{this.state.cars[1].year}</td>
                        <td>{this.state.cars[1].stock}</td>
                        <td>${this.state.cars[1].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[2].manufacturer}</td>
                        <td>{this.state.cars[2].model}</td>
                        <td>{this.state.cars[2].year}</td>
                        <td>{this.state.cars[2].stock}</td>
                        <td>${this.state.cars[2].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[3].manufacturer}</td>
                        <td>{this.state.cars[3].model}</td>
                        <td>{this.state.cars[3].year}</td>
                        <td>{this.state.cars[3].stock}</td>
                        <td>${this.state.cars[3].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[4].manufacturer}</td>
                        <td>{this.state.cars[4].model}</td>
                        <td>{this.state.cars[4].year}</td>
                        <td>{this.state.cars[4].stock}</td>
                        <td>${this.state.cars[4].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[5].manufacturer}</td>
                        <td>{this.state.cars[5].model}</td>
                        <td>{this.state.cars[5].year}</td>
                        <td>{this.state.cars[5].stock}</td>
                        <td>${this.state.cars[5].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[6].manufacturer}</td>
                        <td>{this.state.cars[6].model}</td>
                        <td>{this.state.cars[6].year}</td>
                        <td>{this.state.cars[6].stock}</td>
                        <td>${this.state.cars[6].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[7].manufacturer}</td>
                        <td>{this.state.cars[7].model}</td>
                        <td>{this.state.cars[7].year}</td>
                        <td>{this.state.cars[7].stock}</td>
                        <td>${this.state.cars[7].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[8].manufacturer}</td>
                        <td>{this.state.cars[8].model}</td>
                        <td>{this.state.cars[8].year}</td>
                        <td>{this.state.cars[8].stock}</td>
                        <td>${this.state.cars[8].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                    <tr>
                        <td>{this.state.cars[9].manufacturer}</td>
                        <td>{this.state.cars[9].model}</td>
                        <td>{this.state.cars[9].year}</td>
                        <td>{this.state.cars[9].stock}</td>
                        <td>${this.state.cars[9].price}.00</td>
                        {/* <td><button onclick="changeStock(0)">Increment</button></td> */}
                    </tr>
                </table>
            </div>
        );
    };
}

// function incrementStock(index) {
//     App.setState();
// }

class Car extends React.Component {
    render() {
    }
}

ReactDOM.render(<App />, document.getElementById("app"))


{/* <tr>
<td>{this.state.cars[0].manufacturer}</td>
<td>{this.state.cars[0].model}</td>
<td>{this.state.cars[0].year}</td>
<td>{this.state.cars[0].stock}</td>
<td>${this.state.cars[0].price}.00</td>
{/* <td><button onclick="changeStock(0)">Increment</button></td> */}
// </tr > * /}


// {/* {this.state.cars.map(index) => {
//                             <tr index={index}>

//                             </tr>
//                         }} */}

// {
//     this.state.cars.map((cars, index) => {
//         <tr index={index}>
//             <td>{cars.manufacturer}</td>
//             <td>{cars.model}</td>
//             <td>{cars.year}</td>
//             <td>{cars.stock}</td>
//             <td>{cars.price}</td>
//         </tr>
//     }