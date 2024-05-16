const p_4=[
    {
        que:`1.	A set of 5 words (strings) will be taken as command line arguments. Write a program to reverse each word and check whether it is palindrome or not using method.`,
        ans:`public class PalindromeChecker {
            public static void main(String[] args) {
                if (args.length != 5) {
                    System.out.println("Please provide 5 words as command line arguments.");
                } else {
                    for (String word : args) {
                        if (isPalindrome(word)) {
                            System.out.println(word + " is a palindrome.");
                        } else {
                            System.out.println(word + " is not a palindrome.");
                        }
                    }
                }
            }
        
            public static boolean isPalindrome(String word) {
                String reversedWord = new StringBuilder(word).reverse().toString();
                return word.equals(reversedWord);
            }
        }
        `
    },
    {
        que:`2.	Define the class BankAccount to represent an account we open with bank. Define the subclasses SavingAccount and FixedDepositAccount. Implement the operations like openAccount(), deposit(), checkBalance(), withdraw() and calInterest() for these classes.`,
        ans:`class BankAccount {
            protected double balance;
        
            public void openAccount(double initialDeposit) {
                balance = initialDeposit;
            }
        
            public void deposit(double amount) {
                balance += amount;
            }
        
            public double checkBalance() {
                return balance;
            }
        
            public void withdraw(double amount) {
                if (balance >= amount) {
                    balance -= amount;
                } else {
                    System.out.println("Insufficient balance.");
                }
            }
        }
        
        // SavingAccount subclass
        class SavingAccount extends BankAccount {
            private double interestRate;
        
            public void setInterestRate(double rate) {
                interestRate = rate;
            }
        
            public void calInterest() {
                double interest = balance * interestRate / 100;
                balance += interest;
            }
        }
        
        // FixedDepositAccount subclass
        class FixedDepositAccount extends BankAccount {
            private int tenure; // in years
            private double interestRate;
        
            public void setTenure(int years) {
                tenure = years;
            }
        
            public void setInterestRate(double rate) {
                interestRate = rate;
            }
        
            public void calInterest() {
                double interest = balance * interestRate * tenure / 100;
                balance += interest;
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                SavingAccount savingAccount = new SavingAccount();
                savingAccount.openAccount(1000);
                savingAccount.deposit(500);
                System.out.println("Balance after deposit: " + savingAccount.checkBalance());
        
                savingAccount.setInterestRate(5.0);
                savingAccount.calInterest();
                System.out.println("Balance after interest calculation: " + savingAccount.checkBalance());
        
                savingAccount.withdraw(200);
                System.out.println("Balance after withdrawal: " + savingAccount.checkBalance());
        
                FixedDepositAccount fixedDepositAccount = new FixedDepositAccount();
                fixedDepositAccount.openAccount(5000);
                fixedDepositAccount.setTenure(3);
                fixedDepositAccount.setInterestRate(6.0);
                fixedDepositAccount.calInterest();
                System.out.println("Fixed Deposit Balance after interest calculation: " + fixedDepositAccount.checkBalance());
            }
        }
        `
    },
    {
        que:`3.	Write a program that finds area of any shape by overloading area () method for Square, Rectangle, Triangle and Square.`,
        ans:`class AreaCalculator {
            // Area of a square
            public double area(double side) {
                return side * side;
            }
        
            // Area of a rectangle
            public double area(double length, double width) {
                return length * width;
            }
        
            // Area of a triangle
            public double area(double base, double height, String shape) {
                if (shape.equalsIgnoreCase("triangle")) {
                    return 0.5 * base * height;
                } else {
                    System.out.println("Invalid shape for this method.");
                    return 0;
                }
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                AreaCalculator calculator = new AreaCalculator();
        
                // Calculating area of a square
                double squareArea = calculator.area(5.0);
                System.out.println("Area of the square: " + squareArea);
        
                // Calculating area of a rectangle
                double rectangleArea = calculator.area(4.0, 6.0);
                System.out.println("Area of the rectangle: " + rectangleArea);
        
                // Calculating area of a triangle
                double triangleArea = calculator.area(3.0, 4.0, "triangle");
                System.out.println("Area of the triangle: " + triangleArea);
            }
        }
        `
    },
    {
        que:`4.	Write a program that finds Volume of any shape by overloading volume () method for Cube, Rectangular Cube and Sphere.`,
        ans:`import java.lang.Math;

        class VolumeCalculator {
            // Volume of a cube
            public double volume(double side) {
                return Math.pow(side, 3);
            }
        
            // Volume of a rectangular cube
            public double volume(double length, double width, double height) {
                return length * width * height;
            }
        
            // Volume of a sphere
            public double volume(double radius, String shape) {
                if (shape.equalsIgnoreCase("sphere")) {
                    return (4.0 / 3.0) * Math.PI * Math.pow(radius, 3);
                } else {
                    System.out.println("Invalid shape for this method.");
                    return 0;
                }
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                VolumeCalculator calculator = new VolumeCalculator();
        
                // Calculating volume of a cube
                double cubeVolume = calculator.volume(5.0);
                System.out.println("Volume of the cube: " + cubeVolume);
        
                // Calculating volume of a rectangular cube
                double rectangularCubeVolume = calculator.volume(4.0, 6.0, 3.0);
                System.out.println("Volume of the rectangular cube: " + rectangularCubeVolume);
        
                // Calculating volume of a sphere
                double sphereVolume = calculator.volume(2.0, "sphere");
                System.out.println("Volume of the sphere: " + sphereVolume);
            }
        }
        `
    },{
        que:`5.	Write a Program to maintain employee’s information. Program should illustrate Inheritance concept. (Use your imagination to create class or subclass used for employee).`,
        ans:`class Employee {
            private String name;
            private int employeeId;
            private double salary;
        
            public Employee(String name, int employeeId, double salary) {
                this.name = name;
                this.employeeId = employeeId;
                this.salary = salary;
            }
        
            public void displayInfo() {
                System.out.println("Name: " + name);
                System.out.println("Employee ID: " + employeeId);
                System.out.println("Salary: $" + salary);
            }
        }
        
        class Manager extends Employee {
            private String department;
        
            public Manager(String name, int employeeId, double salary, String department) {
                super(name, employeeId, salary);
                this.department = department;
            }
        
            @Override
            public void displayInfo() {
                super.displayInfo();
                System.out.println("Department: " + department);
            }
        }
        
        class Developer extends Employee {
            private String programmingLanguage;
        
            public Developer(String name, int employeeId, double salary, String programmingLanguage) {
                super(name, employeeId, salary);
                this.programmingLanguage = programmingLanguage;
            }
        
            @Override
            public void displayInfo() {
                super.displayInfo();
                System.out.println("Programming Language: " + programmingLanguage);
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                Manager manager = new Manager("dev ", 1001, 75000, "IT");
                Developer developer = new Developer("harsh Prajapati", 2001, 600000, "Java");
        
                System.out.println("Manager Information:");
                manager.displayInfo();
                System.out.println("Developer Information:");
                developer.displayInfo();
            }
        }
        
        `
    },{
        que:`
        6.	Create a base class Shape. Use this class to store two double type values that could be used to compute area of any shape. Derive two specific classes called Triangle and Rectangle from the base shape. Add to the base a member function getdata() to initialize base class data member and another member function display_area() to compute and display the area of figures. (Use Method Overriding).
        `,
        ans:`import java.util.Scanner;

        class Shape {
            protected double dimension1;
            protected double dimension2;
        
            public void getData() {
                Scanner scanner = new Scanner(System.in);
                System.out.print("Enter dimension 1: ");
                if (scanner.hasNextDouble()) {
                    dimension1 = scanner.nextDouble();
                } else {
                    System.out.println("Invalid input for dimension 1.");
                    scanner.close();
                    return;
                }
        
                System.out.print("Enter dimension 2: ");
                if (scanner.hasNextDouble()) {
                    dimension2 = scanner.nextDouble();
                } else {
                    System.out.println("Invalid input for dimension 2.");
                    scanner.close();
                    return;
                }
        
                scanner.close();
            }
        
            public void displayArea() {
                System.out.println("Area calculation not defined for generic shape.");
            }
        }
        
        class Triangle extends Shape {
            @Override
            public void displayArea() {
                double area = 0.5 * dimension1 * dimension2;
                System.out.println("Area of the Triangle: " + area);
            }
        }
        
        class Rectangle extends Shape {
            @Override
            public void displayArea() {
                double area = dimension1 * dimension2;
                System.out.println("Area of the Rectangle: " + area);
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                Shape shape1 = new Triangle();
                Shape shape2 = new Rectangle();
        
                System.out.println("Enter dimensions for Triangle:");
                shape1.getData();
                shape1.displayArea();
        
                System.out.println("Enter dimensions for Rectangle:");
                shape2.getData();
                shape2.displayArea();
            }
        }
        `
    }
];
export default p_4;
