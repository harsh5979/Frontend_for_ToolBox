const p_5 = [{
que:`1.	Describe abstract class called Shape which has three subclasses say Triangle, Rectangle, Circle. Define one method area() in the abstract class and override this area() in these three subclasses to calculate for specific object, i.e., area() of Triangle subclass should calculate area of triangle etc. Same for Rectangle and Circle.`,
ans:`abstract class Shape {
    abstract double area();
}

class Triangle extends Shape {
    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    double area() {
        return 0.5 * base * height;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return length * width;
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Triangle triangle = new Triangle(5, 3);
        Rectangle rectangle = new Rectangle(4, 6);
        Circle circle = new Circle(2);

        System.out.println("Area of Triangle: " + triangle.area());
        System.out.println("Area of Rectangle: " + rectangle.area());
        System.out.println("Area of Circle: " + circle.area());
    }
}

`
},{
    que:`2.	Write a program that demonstrates the instance of operator. Declare interfaces I1 and I2. Interface I3 extends both of these interfaces. Also declare interface I4. Class X implements I3. Class W extends X and implements I4. Create an object of class W. Use the instance of operator to test if that object implements each of the interfaces and is of type X.`,
    ans:`interface I1 {}
    interface I2 {}
    interface I3 extends I1, I2 {}
    interface I4 {}
    
    class X implements I3 {}
    class W extends X implements I4 {}
    
    public class Main {
        public static void main(String[] args) {
            W obj = new W();
    
            // Check if obj implements each interface and is of type X
            if (obj instanceof I1) {
                System.out.println("obj implements interface I1");
            }
            if (obj instanceof I2) {
                System.out.println("obj implements interface I2");
            }
            if (obj instanceof I3) {
                System.out.println("obj implements interface I3");
            }
            if (obj instanceof I4) {
                System.out.println("obj implements interface I4");
            }
            if (obj instanceof X) {
                System.out.println("obj is of type X");
            }
        }
    }
    
    
    
    `
},{
    que:`3.Write a java program to implement an interface called Exam with a method Pass (int mark) that returns a boolean. Write another interface called Classify with a method Division (int average) which returns a String. Write a class called Result which implements both Exam and Classify. The Pass method should return true if the mark is greater than or equal to 50 else false. The Division method must return "First" when the parameter average is 60 or more, "Second" when average is 50 or more but below 60, "No division" when average is less than 50.

    `,
    ans:`interface Exam {
        boolean Pass(int mark);
    }
    
    interface Classify {
        String Division(int average);
    }
    
    class Result implements Exam, Classify {
        @Override
        public boolean Pass(int mark) {
            return mark >= 50;
        }
    
        @Override
        public String Division(int average) {
            if (average >= 60) {
                return "First";
            } else if (average >= 50) {
                return "Second";
            } else {
                return "No division";
            }
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Result result = new Result();
    
            // Test Pass method
            System.out.println("Result of Pass method with mark 70: " + result.Pass(70));
            System.out.println("Result of Pass method with mark 40: " + result.Pass(40));
    
            // Test Division method
            System.out.println("Division with average 65: " + result.Division(65));
            System.out.println("Division with average 55: " + result.Division(55));
            System.out.println("Division with average 45: " + result.Division(45));
        }
    }
    
    `
}
];
export default p_5;
