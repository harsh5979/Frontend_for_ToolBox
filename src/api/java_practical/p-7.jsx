const p_7 = [{
    que:`1.Write a program that removes all the occurrences of a specified string from a text file. For example, invoking java Practical7_1 John filename removes the string John from the specified file. Your program should read the string as an input.`,
    ans:`import java.io.BufferedReader;
    import java.io.BufferedWriter;
    import java.io.FileReader;
    import java.io.FileWriter;
    import java.io.IOException;
    import java.util.Scanner;
    
    public class Practical7_1 {
        public static void main(String[] args) {
            if (args.length < 1) {
                System.out.println("Usage: java Practical7_1 <file_name>");
                return;
            }
    
            String fileName = args[0];
    
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter the string to remove: ");
            String stringToRemove = scanner.nextLine();
            scanner.close();
    
            try {
                removeStringFromFile(stringToRemove, fileName);
                System.out.println("String '" + stringToRemove + "' removed from the file '" + fileName + "'.");
            } catch (IOException e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    
        public static void removeStringFromFile(String stringToRemove, String fileName) throws IOException {
            BufferedReader reader = new BufferedReader(new FileReader(fileName));
            StringBuilder content = new StringBuilder();
    
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append(System.lineSeparator());
            }
            reader.close();
    
            String updatedContent = content.toString().replaceAll(stringToRemove, "");
    
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName));
            writer.write(updatedContent);
            writer.close();
        }
    }
`,
note_p:`add input.txt file and run in Terminal`,
note:`java Practical7_1 input.txt`
}
,
{
    que:`2.	Write a program that will count the number of characters, words, and lines in a file. Words are separated by whitespace characters. The file name should be passed as a command-line argument.`,
    ans:`import java.io.BufferedReader;
    import java.io.FileReader;
    import java.io.IOException;
    
    public class FileStatsCounter {
        public static void main(String[] args) {
            if (args.length < 1) {
                System.out.println("Usage: java FileStatsCounter <file_name>");
                return;
            }
    
            String fileName = args[0];
            try {
                int[] stats = countFileStats(fileName);
                System.out.println("Number of characters: " + stats[0]);
                System.out.println("Number of words: " + stats[1]);
                System.out.println("Number of lines: " + stats[2]);
            } catch (IOException e) {
                System.out.println("Error reading file: " + e.getMessage());
            }
        }
    
        public static int[] countFileStats(String fileName) throws IOException {
            BufferedReader reader = new BufferedReader(new FileReader(fileName));
            int charCount = 0;
            int wordCount = 0;
            int lineCount = 0;
    
            String line;
            while ((line = reader.readLine()) != null) {
                lineCount++;
                charCount += line.length();
                String[] words = line.trim().split("\\s+");
                wordCount += words.length;
            }
    
            reader.close();
            return new int[]{charCount, wordCount, lineCount};
        }
    }
    `,
    dse:`Here's how the program works:

 1. It checks if the command-line arguments contain at least one argument (the file name).
    2.It reads the file line by line and counts the characters, words, and lines.
    3.It prints the counts to the console.
    To use this program, save it into a file named FileStatsCounter.java, compile it using javac FileStatsCounter.java, and run it using java FileStatsCounter <file_name>, where <file_name> is the name of the file you want to analyze.
    
    For example, if you have a file named sample.txt, you would run:`,
    note:`java FileStatsCounter sample.txt
    `,
    note_p:`add sample.txt file and run in Terminal`

},
{
    que:`3.	Write a program to create a file named Practical7.txt if it does not exist. Write 100 integers created randomly into the file. Integers are separated by spaces in the file. Read the data back from the file and display the data in increasing order.`,
    ans:`import java.io.*;
    import java.util.*;
    
    public class FileReadWrite {
        public static void main(String[] args) {
            // File name
            String fileName = "Practical7.txt";
    
            try {
                // Create a file object
                File file = new File(fileName);
    
                // Create the file if it doesn't exist
                if (!file.exists()) {
                    file.createNewFile();
                }
    
                // Write 100 random integers to the file
                try (PrintWriter writer = new PrintWriter(new FileWriter(file))) {
                    Random random = new Random();
                    for (int i = 0; i < 100; i++) {
                        writer.print(random.nextInt(1000)); // Generating integers between 0 and 999
                        writer.print(" ");
                    }
                }
    
                // Read the data back from the file
                try (Scanner scanner = new Scanner(file)) {
                    List<Integer> integers = new ArrayList<>();
                    while (scanner.hasNextInt()) {
                        integers.add(scanner.nextInt());
                    }
    
                    // Sort the integers in increasing order
                    Collections.sort(integers);
    
                    // Display the sorted integers
                    System.out.println("Integers in increasing order:");
                    for (int num : integers) {
                        System.out.print(num + " ");
                    }
                    System.out.println();
                }
    
            } catch (IOException e) {
                System.out.println("An error occurred: " + e.getMessage());
            }
        }
    }
    `
}



]
export default p_7;
