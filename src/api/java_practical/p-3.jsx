const p_3 = [
  {
    que: `1.	Write a Java application which takes several command line arguments, which are supposed to be names of students and prints output as given below: (Suppose we enter 3 names then output should be as follows):
        Number of arguments = 3 1: First Student Name is =Tom
        2: Second Student Name is =Dick 3: Third Student Name is =Harry
        (Hint: An array may be used for converting from numeric values from 1 to 20 into String.) 
        `,
    ans: `public class pra3_1 {


            public static void main(String[] args) { System.out.println("Number of arguments = " + args.length); for (int i = 0; i < args.length; i++) {
            System.out.println(i+1 + " Student Name is = " + args[i]);
            }
            }
            }
            `,
  },
  {
    que: `2.	Design a class named Rectangle to represent a rectangle. The class contains: Two double data fields named width and height that specify the width and height of the rectangle. The default values are 1 for both width and height.
        A no-arg constructor that creates a default rectangle.
        A constructor that creates a rectangle with the specified width and height.
         
        A method named getArea() that returns the area of this rectangle. A method named getPerimeter() that returns the perimeter.
        Write a test program that creates two Rectangle objects—one with width 4 and height 40 and the other with width 3.5 and height 35.9. Display the width, height, area, and perimeter of each rectangle in this order.
        `,
    ans: `class Rectangle {


            double width; double height;
            
            public Rectangle() { this.width = 4;
            this.height = 40;
            }
            
            
            public Rectangle(double width, double height) { this.width = width;
            this.height = height;
            }
            
            
            public double getArea() { return width * height;
            }
            
            
            public double getPerimeter() { return 2 * (width + height);
            }
            }
             
            
            
            public class RectangleTest {
            
            
            public static void main(String[] args) {
            
            
            
            
            Rectangle rectangle1 = new Rectangle(); Rectangle rectangle2 = new Rectangle(3.5, 39.5);
            
            System.out.println("Rectangle 1:"); System.out.println(" Width: " + rectangle1.width); System.out.println(" Height: " + rectangle1.height); System.out.println(" Area: " + rectangle1.getArea());
            System.out.println(" Perimeter: " + rectangle1.getPerimeter());
            
            
            System.out.println("Rectangle 2:"); System.out.println(" Width: " + rectangle2.width); System.out.println(" Height: " + rectangle2.height); System.out.println(" Area: " + rectangle2.getArea());
            System.out.println(" Perimeter: " + rectangle2.getPerimeter());
            }
            }
            `,
  },
  {
    que: `3.	Define a class called Cartesian Point, which has two instance variables, x and y. Provide the methods get X() and get Y() to return the values of the x and y values respectively, a method called move() which would take two integers as parameters and change the values of x and
 
        y respectively, a method called display() which would display the current values of x and y. Now overload the method move() to work with single parameter, which would set both x and y to the same values,provide constructors with two parameters and overload to work with one parameter as well. Now define a class called Test Cartesian Point, with the main method to test the various methods in the Cartesian Point class.
        `,
    ans: `public class TestCartesianPoint { static class CartesianPoint{ private int x, y;

            public CartesianPoint(int x, int y) { this.x = x;
            this.y = y;
            }
            
            public CartesianPoint(int value) { this.x = value;
            this.y = value;
            }
            
            public int getX() { return x;
            }
            
            
            public int getY() { return y;
            }
            
            public void move(int dx, int dy) { x += dx;
            y += dy;
            }
            
            public void move(int delta) { move(delta, delta);
            }
            
            public void display() {
            System.out.println("Current position: (" + x + ", " + y + ")");
            }
            }
            public static void main(String[] args) { CartesianPoint point1 = new CartesianPoint(3, 4);
            System.out.println("Testing point1 with two-parameter constructor:"); point1.display();
            
            point1.move(2, 3);
            System.out.println("After moving point1 by (2, 3):"); point1.display();
             
            
            point1.move(1);
            System.out.println("After moving point1 by 1 in both directions:"); point1.display();
            
            System.out.println("Testing point2 with one-parameter constructor:"); CartesianPoint point2 = new CartesianPoint(5);
            point2.display();
            
            point2.move(-1, -2);
            System.out.println("After moving point2 by (-1, -2):"); point2.display();
            
            point2.move(3);
            System.out.println("After moving point2 by 3 in both directions:"); point2.display();
            }
            }
            
            `,
  },
  {
    que: `4.	Create a class Employee which has two private data members name and salary and it has two public member functions named as getData() and putData() where getData() gets name and salary from the user putData() displays name and salary for any user.`,
    ans: `import java.util.Scanner;

    public class Employee { private String name; private double salary;
    
    public void getData() {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("Enter employee's name: "); this.name = scanner.nextLine();
    
    System.out.print("Enter employee's salary: "); this.salary = scanner.nextDouble();
    
    scanner.nextLine();
    }
     
    
    public void putData() { System.out.println("Employee Name: " + name); System.out.println("Employee Salary: $" + salary);
    }
    
    public static void main(String[] args) { Employee employee = new Employee();
    
    employee.getData();
    
    employee.putData();
    }}
    `,
  },
  {
    que: `5.	Define a class Time with hours and minutes as two data members, add necessary member functions to initialize and display data of class. Do not use constructors in a class. Define a member function sum () which adds two Time objects. (Use the statements like T3.sum (T1, T2)).`,
    ans: `public class Time { private int hours; private int minutes;

        public void setTime(int hours, int minutes) { this.hours = hours;
        this.minutes = minutes;
        }
        
        
        public int getHours() { return hours;
        }
        
        public int getMinutes() { return minutes;
        }
        
        public void displayTime() {
        System.out.println(hours+" hours and "+minutes+" minutes");
        }
        
        public void sum(Time T1, Time T2) {
        int totalMinutes = T1.getMinutes() + T2.getMinutes(); int extraHours = totalMinutes / 60;
         
        this.minutes = totalMinutes % 60;
        this.hours = T1.getHours() + T2.getHours() + extraHours;
        }
        
        public static void main(String[] args) { Time T1 = new Time();
        Time T2 = new Time(); Time T3 = new Time();
        T1.setTime(2, 45);
        T2.setTime(3, 30); T3.sum(T1, T2);
        System.out.print("Time 1 : "); T1.displayTime(); System.out.print("Time 2 : "); T2.displayTime(); System.out.print("Sum of Time: "); T3.displayTime();
        }
        }
        `,
  },
  {
    que: `6.	Define Class named Point which represents 2-D Point, i.e P (x, y). Define Default constructor to initialize both data member value 5, Parameterized constructor to initialize member according to value supplied by user and Copy Constructor. Define Necessary Function and Write a program to test class Point.`,
    ans: `public class Point { private int x, y;

        public Point() { this.x = 5;
        this.y = 5;
        }
        
        public Point(int x, int y) { this.x = x;
        this.y = y;
        }
        
        public Point(Point p) { this.x = p.x;
        this.y = p.y;
        }
        
        
        public void displayPoint() {
        System.out.println("Point (x, y): (" + x + ", " + y + ")");
         
        }
        
        public static void main(String[] args) { Point p1 = new Point();
        Point p2 = new Point(10, 20); Point p3 = new Point(p2);
        
        p1.displayPoint(); p2.displayPoint(); p3.displayPoint();
        }
        }
        
        `,
  },
  {
    que: `7.	Create a class Account. It has three data member account id, name and balance. Define function to assign value and display value. Define function that search account number given by the user. If account number exists, print detail of that account. Write a program using array of object. Declare at least 5 account and print details.`,
    ans: `import java.util.*; class Account {
        int account_id; String name; double balance;
        private String password;
        
        public Account(int accountId, String name, double balance) { this.account_id = accountId;
        this.name = name; this.balance = balance;
        }
        
        public void display() throws InterruptedException { System.out.println("fetching details..."); Thread.sleep(1000);
        System.out.println("Account id:" + this.account_id); Thread.sleep(1000);
        System.out.println("Name:" + this.name); Thread.sleep(1000); System.out.println("balance:" + this.balance);
        }
        
        public int getData() { return account_id;
        
        }}
         
        
        public class TestAccount {
        
        public static void main(String[] args) throws InterruptedException { Scanner scan = new Scanner(System.in);
        
        Account[] accounts = new Account[5]; accounts[0] = new Account(97, "Harsh", 2500.0); accounts[1] = new Account(21, "dev", 150.0); accounts[2] = new Account(99, "Jay", 2000.0); accounts[3] = new Account(100, "raj", 2500.0);
        System.out.print("enter acc no you want to search:"); int s1=scan.nextInt();
        for (int i = 0; i < accounts.length; i++) { if (s1==accounts[i].account_id) {
        
        accounts[i].display(); break;
        }
        
        }
        }
        }
        `,
  },
];
export default p_3;
