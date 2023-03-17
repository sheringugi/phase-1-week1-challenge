function getStudentGrade(grade){
    //validation
    if (grade === undefined || isNaN(grade) || grade<0 || grade>100){
        return "Invalid grade"
    }
    //statements
    if (grade>=80 && grade<=100){
        return "A"
    }
    else if (grade>=60 && grade<=79){
        return "B"
    }
    else if (grade>=49 && grade<=59){
        return "C"
    }
    else if(grade>=40 && grade<49){
        return "D"
    }
    else if(grade < 40){
        return "E"
    }
    return "Invalid grade"
}

function detectOverspeeding(speedOfCar) {
    // Validating
    if (speedOfCar === undefined || isNaN(speedOfCar)
    ){
        return "Invalid value"

    }
    // conditions

    if (speedOfCar<=70){ 
        return "Ok"
    }
    else {
        excessSpeedLimit = speedOfCar - 70;
        points = 0;
        while (excessSpeedLimit > 0){
            excessSpeedLimit = excessSpeedLimit - 5;
            points = points + 1;
            if(points > 12) {
                return "License suspended";
            }
        }
        return "Points:" + points;
    }

}

function calculateNetSalary(basicPay, benefits){
    // Net Salary= grossPay- deductions - paye
    basicPay = parseFloat(basicPay)
    benefits = parseFloat(benefits)
    let grossPay= calculateGrossPay(basicPay, benefits)   
    let nssfDeduction= calculateNssfDeductions(grossPay)
    let nhifDeduction= calculateNssfDeductions(grossPay)
    let paye= calculatePaye(grossPay)

    return grossPay -paye - nssfDeduction - nhifDeduction

}
function calculateGrossPay(basicSalary, benefits) {
    return basicSalary + benefits
    
}
function calculatePaye(grossPay){
    // grossPay is basic pay plus benefits
    // Use tax brackets to determine percentage of grossPay
    let taxPercentage=0
    if(grossPay<=24000){
        taxPercentage=10
    }
    else if(grossPay>=24001 && grossPay<=32333){
        taxPercentage=25
    }
    else if(grossPay>32333){
        taxPercentage=30
    }   
    let paye = grossPay * taxPercentage/100
    // Deduct personalRelief
    let personalRelief= 2400
    return paye - personalRelief
}

function calculateNhifDeductions(grossPay){
    // Calculate NHIF deduction using defined NHIF gross pay brackets
    let nhifDeduction = 0
    if(grossPay<=5999){
        nhifDeduction= 150
    }
    else if(grossPay>=6000 && grossPay<=7999){
        nhifDeduction= 300
    } 
    else if(grossPay>=8000 && grossPay<=11999){
        nhifDeduction= 400
    }
    else if(grossPay>=12000 && grossPay<=14999){
        nhifDeduction= 500
    }
    else if(grossPay>=15000 && grossPay<=19999){
        nhifDeduction= 600
    }
    else if(grossPay>=20000 && grossPay<=24999){
        nhifDeduction= 750
    }
    else if(grossPay>=25000 && grossPay<=29999){
        nhifDeduction= 850
    }
    else if(grossPay>=30000 && grossPay<=34999){
        nhifDeduction= 900
    }
    else if(grossPay>=35000 && grossPay<=39999){
        nhifDeduction= 950
    }
    else if(grossPay>=40000 && grossPay<=44999){
        nhifDeduction= 1000
    }
    else if(grossPay>=45000 && grossPay<=49999){
        nhifDeduction= 1100
    }
    else if(grossPay>=50000 && grossPay<=59999){
        nhifDeduction= 1200
    }
    else if(grossPay>=60000 && grossPay<=69999){
        nhifDeduction= 1300
    }
    else if(grossPay>=70000 && grossPay<=79999){
        nhifDeduction= 1400 
    }
    else if(grossPay>=80000 && grossPay<=89999){
        nhifDeduction= 1500
    }
    else if(grossPay>=90000 && grossPay<=99999){
        nhifDeduction= 1600
    }
    else if(grossPay>=100000){
        nhifDeduction= 1700
    }

    return nhifDeduction;
}
function calculateNssfDeductions(grossPay){
    // Calculate NSSF deductions using old rates
    let nssfDeduction = 0
        nssfDeduction= grossPay * 5/100
    if(nssfDeduction>400){
        return 400
    } 
}
