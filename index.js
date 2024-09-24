function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function countLeapYears(startYear, endYear) {
    let leapYears = 0;
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            leapYears++;
        }
    }
    return leapYears;
}

function CalculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        document.getElementById("result").innerText = "please enter your birthday.";
        return;
    }

    const birth = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = "your age is : " + age + " years.";

    const leapYears = countLeapYears(birth.getFullYear(), today.getFullYear());
    document.getElementById("leapYearsResult").innerText = "  The number of leap years in your age is: " + leapYears + " years.";
}