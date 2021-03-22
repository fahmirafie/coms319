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

        this.handleAddStock = this.handleAddStock.bind(this);
        // this.sort = this.sort(this);
    }

    handleAddStock(i) {
        
        var carArray = this.state.cars;
        carArray[parseInt(i)].stock = carArray[parseInt(i)].stock + 1
        this.setState({cars: carArray});
    }
    
    // sortByYear() {
    //     var carArray = this.state.cars;
    //     carArray.sort(function(a, b) {
    //         return [a].year - [b].year;
    //     }
    //     this.setState({cars: carArray});
    // }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <Heading />
                        {/* {this.state.cars.map((car, index) => <Car key={i} cars={car} />)} */}
                        {this.state.cars.map((car, i) => 
                            <tr>
                                <td>{car.manufacturer}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.stock}</td>
                                <td>${car.price}.00</td>
                                <td><button onClick={() => this.handleAddStock(i)}>Increment</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

}

class Heading extends React.Component {
    render() {
        return (
            <tr>
                <th>manufacturer</th>
                <th>model</th>
                <th><button><b>year</b></button></th>
                <th>stock</th>
                <th>price</th>
                <th>Option</th>
            </tr>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"))