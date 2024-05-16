const p_6 = [
  {
    que: `1.	Write a program in Java to develop user defined exception for “Divide by Zero” error.`,
    ans: `// Custom exception class for DivideByZeroException
        class DivideByZeroException extends Exception {
            public DivideByZeroException(String message) {
                super(message);
            }
        }
        
        // Calculator class that performs division and throws DivideByZeroException if divisor is zero
        class Calculator {
            public static double divide(int dividend, int divisor) throws DivideByZeroException {
                if (divisor == 0) {
                    throw new DivideByZeroException("Error: Divide by Zero");
                }
                return (double) dividend / divisor;
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                int dividend = 10;
                int divisor = 0;
        
                try {
                    double result = Calculator.divide(dividend, divisor);
                    System.out.println("Result of division: " + result);
                } catch (DivideByZeroException e) {
                    System.out.println(e.getMessage());
                }
            }
        }
        `,
        
   
  },
  {
    que: ` 2.	Write a program in Java to demonstrate throw, throws, finally, multiple try block and multiple catch exception.
        `,
    ans: `class CustomException extends Exception {
            public CustomException(String message) {
                super(message);
            }
        }
        
        public class ExceptionDemo {
            public static void main(String[] args) {
                try {
                    try {
                        // Throw a custom exception
                        throw new CustomException("Custom Exception thrown from inner try block");
                    } catch (CustomException e) {
                        System.out.println("Caught CustomException in inner try block: " + e.getMessage());
                        // Re-throw the exception
                        throw e;
                    } finally {
                        System.out.println("Executing finally block of inner try block");
                    }
                } catch (CustomException e) {
                    System.out.println("Caught CustomException in outer try block: " + e.getMessage());
                } finally {
                    System.out.println("Executing finally block of outer try block");
                }
        
                try {
                    // Throw an ArithmeticException
                    int result = 10 / 0;
                } catch (ArithmeticException e) {
                    System.out.println("Caught ArithmeticException: Division by zero");
                } finally {
                    System.out.println("Executing finally block for ArithmeticException");
                }
        
                try {
                    // Throw a NullPointerException
                    String str = null;
                    str.length();
                } catch (NullPointerException e) {
                    System.out.println("Caught NullPointerException: Object is null");
                } finally {
                    System.out.println("Executing finally block for NullPointerException");
                }
            }
        }
        `,
  },
  {
    que: `3.	Write a small application in Java to develop Banking Application in which user deposits the amount Rs 1000.00 and then start withdrawing ofRs 400.00, Rs 300.00 and it throws exception "Not Sufficient Fund" when user withdraws Rs 500 thereafter.`,
    ans: `class InsufficientFundsException extends Exception {
            public InsufficientFundsException(String message) {
                super(message);
            }
        }
        
        class BankAccount {
            private double balance;
        
            public BankAccount(double initialBalance) {
                balance = initialBalance;
            }
        
            public void deposit(double amount) {
                balance += amount;
                System.out.println("Deposit of Rs " + amount + " successful. Current balance: Rs " + balance);
            }
        
            public void withdraw(double amount) throws InsufficientFundsException {
                if (amount > balance) {
                    throw new InsufficientFundsException("Not Sufficient Fund");
                }
                balance -= amount;
                System.out.println("Withdrawal of Rs " + amount + " successful. Current balance: Rs " + balance);
            }
        }
        
        public class BankingApplication {
            public static void main(String[] args) {
                BankAccount account = new BankAccount(1000.00);
        
                try {
                    account.deposit(1000.00);
                    account.withdraw(400.00);
                    account.withdraw(300.00);
                    account.withdraw(500.00); // This will throw InsufficientFundsException
                } catch (InsufficientFundsException e) {
                    System.out.println(e.getMessage());
                }
            }
        }`,
  },
  {
    que: `4.	Write an application that contains a method named average () has one argument that is an array of strings. It converts these to double values and returns their average. The method generates a NullPointerException,if an array elements is null or a NumberFormatException, if an element is incorrectly formatted. Include throws statement in method declaration.`,
    ans: `public class AverageCalculator {
            public static double average(String[] values) throws NullPointerException, NumberFormatException {
                if (values == null) {
                    throw new NullPointerException("Array is null");
                }
        
                double sum = 0.0;
                int count = 0;
        
                for (String value : values) {
                    if (value == null) {
                        throw new NullPointerException("Element in array is null");
                    }
        
                    try {
                        double num = Double.parseDouble(value);
                        sum += num;
                        count++;
                    } catch (NumberFormatException e) {
                        throw new NumberFormatException("Element is not a valid number: " + value);
                    }
                }
        
                if (count == 0) {
                    throw new IllegalArgumentException("Array is empty or does not contain valid numbers");
                }
        
                return sum / count;
            }
        
            public static void main(String[] args) {
                String[] values = {"10.5", "20.3", "15.7"};
        
                try {
                    double avg = average(values);
                    System.out.println("Average: " + avg);
                } catch (NullPointerException | NumberFormatException | IllegalArgumentException e) {
                    System.out.println("Error: " + e.getMessage());
                }
            }
        }
        `,
  },
  {
    que: `5.	Write an application that generates custom exception if first argument from command line argument is 0.`,
    ans: `class ZeroArgumentException extends Exception {
            public ZeroArgumentException(String message) {
                super(message);
            }
        }
        
        public class CommandLineApp {
            public static void main(String[] args) {
                try {
                    if (args.length > 0) {
                        int firstArg = Integer.parseInt(args[0]);
                        if (firstArg == 0) {
                            throw new ZeroArgumentException("First argument cannot be zero");
                        }
                        System.out.println("First argument is not zero: " + firstArg);
                    } else {
                        System.out.println("No command-line arguments provided");
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid argument format: " + e.getMessage());
                } catch (ZeroArgumentException e) {
                    System.out.println("Error: " + e.getMessage());
                }
            }
        }
        
        `,
  },
  {
    que: `6.	A marklist containing reg.no and marks for a subject is given.if the marks are <0,user-defined IllegalMarkException is thrown out and handled with the message "Illegal Mark". For all valid marks, the candidate will be declared as "PASS" if the marks are equal to or greater than 40, otherwise it will be declared as "FAIL".Write a class called IllegalMarkException.`,
    ans: `class IllegalMarkException extends Exception {
            public IllegalMarkException(String message) {
                super(message);
            }
        }
        
        class MarkListProcessor {
            public static void processMarkList(int[] regNos, int[] marks) {
                if (regNos.length != marks.length) {
                    System.out.println("Error: Invalid mark list");
                    return;
                }
        
                for (int i = 0; i < regNos.length; i++) {
                    try {
                        if (marks[i] < 0) {
                            throw new IllegalMarkException("Illegal Mark for reg.no " + regNos[i]);
                        }
        
                        if (marks[i] >= 40) {
                            System.out.println("Reg.No " + regNos[i] + ": PASS");
                        } else {
                            System.out.println("Reg.No " + regNos[i] + ": FAIL");
                        }
                    } catch (IllegalMarkException e) {
                        System.out.println(e.getMessage());
                    }
                }
            }
        }
        
        public class MarkListApplication {
            public static void main(String[] args) {
                int[] regNos = {101, 102, 103};
                int[] marks = {60, -5, 75};
        
                MarkListProcessor.processMarkList(regNos, marks);
            }
        }
        `,
  },
  {
    que: `7.	Assume that there are two packages, student and exam. A student package contains Student class and the exam package contains Result class. Write a program that generates mark sheet for students.`,
    ans: `class Student {
            private String name;
            private int rollNumber;
        
            public Student(String name, int rollNumber) {
                this.name = name;
                this.rollNumber = rollNumber;
            }
        
            public String getName() {
                return name;
            }
        
            public int getRollNumber() {
                return rollNumber;
            }
        }
        
        class Result {
            private Student student;
            private int marks;
        
            public Result(Student student, int marks) {
                this.student = student;
                this.marks = marks;
            }
        
            public void generateMarkSheet() {
                System.out.println("Mark Sheet");
                System.out.println("-----------");
                System.out.println("Name: " + student.getName());
                System.out.println("Roll Number: " + student.getRollNumber());
                System.out.println("Marks Obtained: " + marks);
                // Additional grading logic or other information can be added here
            }
        }
        
        public class studentsMarkSheet {
            public static void main(String[] args) {
                // Create a student object
                Student student = new Student("Harsh", 97);
        
                // Create a result object and generate mark sheet
                Result result = new Result(student, 85);
                result.generateMarkSheet();
            }
        }
        `,
  },
];
export default p_6;
