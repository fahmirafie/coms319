# COM S 319 - Homework 4 Report

## Akmal Fahmi Mohamad Rafie (fahmi)

Using the sample code, we can use the array of cars to create a table with the columns  “Manufacturer, Model, Year, Stock, Price, Option” using the `render()` function inside the `App` class. React provides an easy way to do this using HTML syntax by using:

- `<table>` tag for the table
- `<tr>` tag for the rows
- `<th>` tag for header (bold and centered)
- `<td>` tag for main elements

---

## Header

The header contains a button which calls the `sortYear()` function. The function copies `this.state.cars` to an array and checks the cars' year for the following conditions:-

- The array is sorted from oldest to newest `(carArray[i].year > carArray[i + 1].year)`
  - Calls `carArray.sort(this.reverseSort)` to sort in reverse (newest to oldest)
- Else
  - Calls `carArray.sort(this.regularSort)` to sort regularly (oldest to newest)

Initially, the rows are not sorted according to the either of the conditions above. And the array has a built-in `sort()` function that can accept other functions as its parameter. In this case, the functions are `reverseSort(a, b)` and `regularSort(a, b)` which we use after checking the cars' year

## Main Body

We use `map()` to render App's `state` data, and every car has a key, `i`, which is the index of its row. Therefore, we can easily render each row with `{car.manufacturer}` for instance. In addition, each car model has an `Increment` button to increase the number of its stock by 1. Similar to how the `sortYear()` function works, the button calls `handleAddStock(i)`, where `i` is the car's key or index. And `handleAddStock(i)` copies the cars' array and increment the stock of the car associated with `i`

## Bindings and setState

All four functions mentioned about need bindings in the App's constructor, and both `handleAddStock(i)` and `sortYear()` call `setState()` to update the cars' array. Note that `regularSort(a, b)` and `reverseSort(a, b)` do not cat `setState()` because they are internal functions of `sortYear()`\

## Outputs

- Initial

![Initial](images/initial.png)

- Incrementing BMW i3 by 1

![Increment](images/increment.png)

- Reverse sort

![Reverse sort](images/reverse_sort.png)

- Regular sort

![Regular sort](images/regular_sort.png)