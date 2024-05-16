const p_2 = [
  {
    que: `1.	Write a program that generate 6*6 two-dimensional matrix, filled with 0‘s and 1‘s , display the matrix, check every raw and column have an odd number‘s of 1‘s.`,
    ans: `import java.util.Random;
        public class pra2_1 {
        public static void main(String[] args) {
            int[][] matrix = generateMatrix(6, 6);
            displayMatrix(matrix);
               boolean rowsOddOnes = checkRows(matrix);
            boolean columnsOddOnes = checkColumns(matrix);
            
            if (rowsOddOnes && columnsOddOnes) {
                System.out.println("Every row and column has an odd number of ones.");
            } else {
                System.out.println("Not every row and column has an odd number of ones.");
            }
        }
          public static int[][] generateMatrix(int rows, int columns) {
            int[][] matrix = new int[rows][columns];
            Random rand = new Random();
                for (int i = 0; i < rows; i++) {
                for (int j = 0; j < columns; j++) {
                    matrix[i][j] = rand.nextInt(2); 
                }
            }
           return matrix;
        }
           public static void displayMatrix(int[][] matrix) {
            for (int[] row : matrix) {
                for (int element : row) {
                    System.out.print(element + " ");
                }
                System.out.println();
            }
        }
           public static boolean checkRows(int[][] matrix) {
            for (int[] row : matrix) {
                int countOnes = 0;
                for (int element : row) {
                    if (element == 1) {
                        countOnes++;
                    }
                }
                if (countOnes % 2 == 0) {
                    return false; 
                }
            }
            return true; 
        }
          public static boolean checkColumns(int[][] matrix) {
            for (int j = 0; j < matrix[0].length; j++) {
                int countOnes = 0;
                for (int i = 0; i < matrix.length; i++) {
                    if (matrix[i][j] == 1) {
                        countOnes++;
                    }
                }
                if (countOnes % 2 == 0) {
                    return false; 
                }
            }
            return true; 
        }
    }
    
    
    `,
  },
  {
    que: `2.	Write a generic method that returns the minimum elements and their indices in a two dimensional array.`,
    ans: `public class  pra2_2 {
        public static void main(String[] args) {
            Integer[][] matrix = {
                {1, 10, 4},
                {4, 11, 7},
                {9, 2, 3}
            };
            
            MinElement<Integer> minElement = findMinElement(matrix);
            
            System.out.println("Minimum element: " + minElement.getElement());
            System.out.println("Index (row, column): " + minElement.getRowIndex() + ", " + minElement.getColumnIndex());
        }
        
        public static <T extends Comparable<T>> MinElement<T> findMinElement(T[][] matrix) {
            if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
                throw new IllegalArgumentException("Matrix is empty");
            }
            
            T min = matrix[0][0];
            int minRowIndex = 0;
            int minColumnIndex = 0;
            
            for (int i = 0; i < matrix.length; i++) {
                for (int j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j].compareTo(min) < 0) {
                        min = matrix[i][j];
                        minRowIndex = i;
                        minColumnIndex = j;
                    }
                }
            }
            
            return new MinElement<>(min, minRowIndex, minColumnIndex);
        }
        
        public static class MinElement<T> {
            private T element;
            private int rowIndex;
            private int columnIndex;
            
            public MinElement(T element, int rowIndex, int columnIndex) {
                this.element = element;
                this.rowIndex = rowIndex;
                this.columnIndex = columnIndex;
            }
            
            public T getElement() {
                return element;
            }
            
            public int getRowIndex() {
                return rowIndex;
            }
            
            public int getColumnIndex() {
                return columnIndex;
            }
        }
    }
    
    `,
  },
  {
    que: `3.	Write a method that returns a new array by eliminating the duplicate values in the array.`,
    ans: `import java.util.Arrays;

    public class pra2_3{
    public static void main(String[] args) {
        int[] inputArray = {10, 20, 30, 40, 10, 20, 50, 60, 30, 70, 80, 90, 10};
        int[] newArray = eliminateDuplicates(inputArray);
        
        System.out.println("Original array: " + Arrays.toString(inputArray));
        System.out.println("Array after eliminating duplicates: " + Arrays.toString(newArray));
    }
    
    public static int[] eliminateDuplicates(int[] arr) {
        Arrays.sort(arr);
        
        int uniqueCount = 1;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                uniqueCount++;
            }
        }
        int[] newArray = new int[uniqueCount];
        newArray[0] = arr[0];
        int index = 1;
      
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                newArray[index] = arr[i];
                index++;
            }
        }
        
        return newArray;
    }
}
`,
  },
  {
    que: `4.	Write a program to add, subtract or multiply two 3*3 integer arrays as per choice of user. `,
    ans: `import java.util.Scanner;

    public class pra2_4 {
        public static void main(String[] args) {
            Scanner ab = new Scanner(System.in);
            int[][] array1 = new int[3][3];
            int[][] array2 = new int[3][3];
            int[][] result = new int[3][3];
    
            System.out.println("Enter elements for Array 1:");
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    array1[i][j] = ab.nextInt();
                }
            }
    
            System.out.println("Enter elements for Array 2:");
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    array2[i][j] = ab.nextInt();
                }
            }
    
            System.out.println("Enter operation symbol (+, -, *):");
            char operation = ab.next().charAt(0);
    
            switch (operation) {
                case '+':
                    for (int i = 0; i < 3; i++) {
                        for (int j = 0; j < 3; j++) {
                            result[i][j] = array1[i][j] + array2[i][j];
                        }
                    }
                    break;
                case '-':
                    for (int i = 0; i < 3; i++) {
                        for (int j = 0; j < 3; j++) {
                            result[i][j] = array1[i][j] - array2[i][j];
                        }
                    }
                    break;
                case '*':
                    for (int i = 0; i < 3; i++) {
                        for (int j = 0; j < 3; j++) {
                            result[i][j] = array1[i][j] * array2[i][j];
                        }
                    }
                    break;
                default:
                    System.out.println("Invalid operation symbol.");
                    return;
            }
    
            System.out.println("Result:");
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    System.out.print(result[i][j] + " ");
                }
                System.out.println();
            }
        }
    }
    `,
  },
  {
    que: `5.	Write a program to sort an array of 10 elements using selection sort.`,
    ans: `public class pra2_5 {
        public static void main(String[] args) {
            int[] arr = {8, 2, 10, 122, 1, 14, 59, 8, 99, 700};
            
            System.out.println("Array before sorting:");
            printArray(arr);
            
            selectionSort(arr);
            
            System.out.println("Array after sorting:");
            printArray(arr);
        }
        
        public static void selectionSort(int[] arr) {
            int n = arr.length;
            
            for (int i = 0; i < n-1; i++) {
                int minIndex = i;
                for (int j = i+1; j < n; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
        
        public static void printArray(int[] arr) {
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
        }
    }
    `,
  },
  {
    que: `6.	Write a program that prompts the user to enter a string and displays the number of vowels and consonants in the string.`,
    ans: `import java.util.Scanner;

	public class pra2_6 {
      public static void main(String[] args) {
        Scanner xyz = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String inputString = xyz.nextLine().toLowerCase(); 
        
        int vowels = 0;
        int consonants = 0;
        
        for (int i = 0; i < inputString.length(); i++) {
            char ch = inputString.charAt(i);
            if (Character.isLetter(ch)) { 
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        
        System.out.println("Number of vowels: " + vowels);
        System.out.println("Number of consonants: " + consonants);
        
        
    }
}

`,
  },
  {
    que: `7.	Write a program that prompts the user to enter two strings and displays the largest common prefix of the two strings.`,
    ans: `import java.util.Scanner;

    public class pra2_7 {
      public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the first string: ");
        String str1 = scanner.nextLine();
        
        System.out.print("Enter the second string: ");
        String str2 = scanner.nextLine();
        
        String largestCommonPrefix = getLargestCommonPrefix(str1, str2);
        
        System.out.println("Largest common prefix: " + largestCommonPrefix);
        
        scanner.close();
    }
    
    public static String getLargestCommonPrefix(String str1, String str2) {
        int minLength = Math.min(str1.length(), str2.length());
        int index = 0;
        
        while (index < minLength && str1.charAt(index) == str2.charAt(index)) {
            index++;
        }
        
        return str1.substring(0, index);
    }
    }
    
    `,
  },
  {
    que:`8.	Some websites impose certain rules for passwords. Write a method that checks whether a string is a valid password. Suppose the password rules are as follows: A password must have at least eight characters. A password consists of only letters and digits. A password must contain at least two digits. Write a program that prompts the user to enter a password and displays Valid Password if the rules are followed or Invalid Password otherwise.`,
    ans:`import java.util.Scanner;

    public class pra2_8 {
        public static void main(String[] args) {
            Scanner pqr = new Scanner(System.in);
            System.out.print("Enter a password: ");
            String password = pqr.nextLine();
            
            if (isValidPassword(password)) {
                System.out.println("Valid Password");
            } else {
                System.out.println("Invalid Password");
            }
            
           pqr.close();
        }
        
        public static boolean isValidPassword(String password) {
            if (password.length() < 8) {
                return false;
            }
            
            int digitCount = 0;
            for (int i = 0; i < password.length(); i++) {
                char ch = password.charAt(i);
                if (!Character.isLetterOrDigit(ch)) {
                    return false;
                }
                if (Character.isDigit(ch)) {
                    digitCount++;
                }
            }
            
            return digitCount >= 2;
        }
    }
    `
  },
];
export default p_2;
