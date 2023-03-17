# Phase 1: Week One Challenge

## Student Grade Generator

This program takes a student's grade input, which should be between 0 and 100, and outputs the corresponding letter grade: A (80-100), B (60-79), C (49-59), D (40-49), or E (less than 40).

### Usage

To use the program, call the `getStudentGrade()` function and pass in the student's grade as an argument. The function will return the corresponding letter grade.

```javascript
const grade = getStudentGrade(78);
console.log(grade); // B
```

#### Parameters

- `grade` (required): a number between 0 and 100 that represents the student's grade.

#### Returns

The function returns a string that represents the student's letter grade, or "Invalid grade" if the input is not valid.

#### Example

```javascript
const grade1 = getStudentGrade(89);
console.log(grade1); // A

const grade2 = getStudentGrade(60);
console.log(grade2); // B

const grade3 = getStudentGrade(50);
console.log(grade3); // C

const grade4 = getStudentGrade(47);
console.log(grade4); // D

const grade5 = getStudentGrade(30);
console.log(grade5); // E

const grade6 = getStudentGrade("not a number");
console.log(grade6); // Invalid grade
```


## Detect Overspeeding Function

This JavaScript function, `detectOverspeeding(speedOfCar)`, is used to determine whether a car is speeding and, if so, the severity of the infraction.

### Input

The function takes one parameter, `speedOfCar`, which should be a number representing the current speed of the car in kilometers per hour.

### Output

The function returns a message indicating the severity of the infraction. If the input value is undefined or not a number, the function returns "Invalid value". If the speed of the car is less than or equal to 70 km/h, the function returns "Ok". If the speed of the car is greater than 70 km/h, the function calculates the number of points that the driver would receive based on the excess speed over 70 km/h. If the number of points is greater than 12, the function returns "License suspended". Otherwise, the function returns "Points: X", where X is the number of points that would be assigned.

### Example Usage

```
console.log(detectOverspeeding(60)); // Output: "Ok"
console.log(detectOverspeeding(80)); // Output: "Points: 2"
console.log(detectOverspeeding("not a number")); // Output: "Invalid value"
console.log(detectOverspeeding(200)); // Output: "License suspended"
```


---


## Net Salary Calculator

This function calculates the net salary of an employee based on their basic pay and benefits, taking into account deductions such as PAYE, NHIF, and NSSF. 

### Function:
```
calculateNetSalary(basicPay, benefits)
```
* `basicPay`: The employee's basic pay as a number.
* `benefits`: The total value of their benefits as a number.

### Returns:
The function returns the employee's net salary as a number.

### Dependencies:
The `calculateNetSalary` function depends on three helper functions: `calculateGrossPay`, `calculateNssfDeductions`, and `calculatePaye`.

### Helper Functions:

#### `calculateGrossPay(basicSalary, benefits)`

Calculates the gross pay (basic salary + benefits) of an employee.

* `basicSalary`: The employee's basic pay as a number.
* `benefits`: The total value of their benefits as a number.

Returns the gross pay as a number.

#### `calculatePaye(grossPay)`

Calculates the PAYE (Pay As You Earn) deduction based on the employee's gross pay, using Kenyan tax brackets.

* `grossPay`: The employee's gross pay as a number.

Returns the PAYE deduction as a number.

#### `calculateNhifDeductions(grossPay)`

Calculates the NHIF (National Hospital Insurance Fund) deduction based on the employee's gross pay, using Kenyan NHIF brackets.

* `grossPay`: The employee's gross pay as a number.

Returns the NHIF deduction as a number.

#### `calculateNssfDeductions(grossPay)`

Calculates the NSSF (National Social Security Fund) deduction based on the employee's gross pay, using the old NSSF rates.

* `grossPay`: The employee's gross pay as a number.

Returns the NSSF deduction as a number.


### Usage:
```
const netSalary = calculateNetSalary(50000, 15000);
console.log(netSalary);
// Output: 41550
```
This will calculate the net salary of an employee with a basic pay of 50000 and benefits worth 15000.

### Notes:
- This calculator uses Kenyan tax, NHIF, and NSSF brackets as of September 2021.
- The `calculateNssfDeductions` function uses the old NSSF rate of 5%.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---