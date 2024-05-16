const p_1 = [
  {
    que: ` 1.Install JDK and IDE in your system. Write down the steps of installation with 
        screenshots. `,
  },

  {
    que: "2. Write a Program that displays Welcome to Java, Learning Java Now and Programming is fun.",
    ans: `

        public class pra1_2 {
        
                
            
            public static void main(String[] args) {
            System.out.print("Welcome to Java, ");
            System.out.print("Learning Java Now and Programming is is fun");
            
            }
        }
            
        `,
  },
  {
    que: `3. Write a program that solves the following equation and displays the value x and y:
        a)	3.4x+50.2y=44.5 2) 2.1x+.55y=5.9 (Assume Cramer‘s rule to solve equation
        b)	ax+by=e x=ed-bf/ad-bc cx+dy=f y=af-ec/ad-bc )
         
        `,
    ans: `

    

public class pra1_3 {
    public static void main(String[] args) {
        double a = 3.4, b = 50.2, c = 2.1, d = 0.55, e = 44.5, f = 5.9;
        
        double x = (e * d - b * f) / (a * d - b * c);
        double y = (a * f - e * c) / (a * d - b * c);
    
        System.out.println("Solution is:");
        System.out.println("X = " + x);
        System.out.println("Y = " + y);
    
        }
}

            
        `,
  },
  {
    que: `4.	Write a program that reads a number in meters, converts it to feet, and displays the result.`,
    ans: `
    import java.util.*;
    
         public class pra1_4_1 {
          public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
    
            System.out.print("Enter length in Meters: ");
            double meter = sc.nextDouble();
            double feet = meter * 3.28084;
    
            System.out.println(meter + " Meter = " + feet + " Feet.");
    
            
        }
    }
    `,
  },
  {
    que: `5.	Body Mass Index (BMI) is a measure of health on weight. It can be calculated by taking your weight in kilograms and dividing it by the square of your height in meters. Write a program that prompts the user to enter weight in pounds and height in inches and displays the BMI.
    Note:- 1 pound=.45359237 Kg and 1 inch=.0254 meters. `,
    ans: `import java.util.Scanner;

    public class pra1_4_2{
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
    
            System.out.print("Enter weight in pounds: ");
            double weightPounds = input.nextDouble();
    
            System.out.print("Enter height in inches: ");
            double heightInches = input.nextDouble();
    
            double weightKg = weightPounds * 0.45359237;
            double heightMeters = heightInches * 0.0254;
    
            double bmi = weightKg / (heightMeters * heightMeters);
    
            System.out.println("BMI: " + bmi);
    
           
        }
    }
    `,
  },
  {
    que: `6.	Write a program that prompts the user to enter three integers and display the integers in decreasing order.`,
    ans: `
    import java.util.Scanner;
    
    public class pra1_5 {
        public static void main(String[] args) {
            int temp;
            Scanner input = new Scanner(System.in);
    
            System.out.print("Enter First Integer: ");
            int a = input.nextInt();
    
            System.out.print("Enter Second Integer: ");
            int b = input.nextInt();
    
            if (a < b) {
                temp = a;
                a = b;
                b = temp;
            }
    
            System.out.print("Enter Third Integer: ");
            int c = input.nextInt();
    
            if (c > b) {
                if (c > a) {
                    temp = c;
                    c = b;
                    b = a;
                    a = temp;
                } else {
                    temp = c;
                    c = b;
                    b = temp;
                }
            }
    
            System.out.println("Integers in decreasing order: " + a + " " + b + " " + c);
        }
    }
    
    `,
  },
  {
    que: ` 7.	Write a program that prompts the user to enter a letter and check whether a letter is a vowel or constant.`,
    ans:`import java.util.Scanner;

    public class pra1_6 {
    public static void main(String[] args) {
       Scanner input = new Scanner(System.in);

       System.out.println("Enter a letter: ");
       char letter = input.next().toLowerCase().charAt(0);

       if ((letter >= 'a' && letter <= 'z')) {
           if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
               System.out.println(letter + " is a vowel.");
           } else {
               System.out.println(letter + " is a consonant.");
           }
       } else {
           System.out.println("Invalid input. Please enter a valid letter.");
       }
      }
 }

`
  },

];

export default p_1;
