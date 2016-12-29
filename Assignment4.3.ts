abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; 
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); 
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

class FinancialDepartment extends Department {

    constructor() {
        super("Financial Department"); 
    }

    printMeeting(): void {
        console.log("The Financial Department meets each Wednesday at 10am.");
    }

    generateReports(): void {
        console.log("Generating financial reports...");
    }
}

class HRDepartment extends Department {

    constructor() {
        super("HR Department"); 
    }

    printMeeting(): void {
        console.log("The HR Department meets each Friday at 10am.");
    }

    generateReports(): void {
        console.log("Generating HR reports...");
    }
}