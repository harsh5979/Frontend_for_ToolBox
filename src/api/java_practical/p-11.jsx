const p_11 = [
 {
    que:`1.	Write a program that lets the user enter numbers from a graphical user interface and displays them in a text area, as shown in Figure. Use a linked list to store the numbers. Do not store duplicate numbers. Add the buttons Sort, Shuffle, and Reverse to sort, shuffle, and reverse the list.`,
    ans:``
 }
 , {
    que: `2. Create two priority queues, {"George", "Jim", "John", "Blake", "Kevin", "Michael"} and {"George", "Katie", "Kevin", "Michelle", "Ryan"}, and find their union, difference, and intersection.`,
    ans: `import java.util.PriorityQueue;

        public class PriorityQueueOperations {
            public static void main(String[] args) {
                // Create priority queues
                PriorityQueue<String> queue1 = new PriorityQueue<>();
                PriorityQueue<String> queue2 = new PriorityQueue<>();
        
                // Add elements to the first queue
                queue1.add("George");
                queue1.add("Jim");
                queue1.add("John");
                queue1.add("Blake");
                queue1.add("Kevin");
                queue1.add("Michael");
        
                // Add elements to the second queue
                queue2.add("George");
                queue2.add("Katie");
                queue2.add("Kevin");
                queue2.add("Michelle");
                queue2.add("Ryan");
        
                // Display the initial queues
                System.out.println("Queue 1: " + queue1);
                System.out.println("Queue 2: " + queue2);
        
                // Union: combine elements from both queues without duplicates
                PriorityQueue<String> union = new PriorityQueue<>(queue1);
                union.addAll(queue2);
        
                // Difference: elements that are in queue1 but not in queue2
                PriorityQueue<String> difference = new PriorityQueue<>(queue1);
                difference.removeAll(queue2);
        
                // Intersection: elements that are common in both queues
                PriorityQueue<String> intersection = new PriorityQueue<>(queue1);
                intersection.retainAll(queue2);
        
                // Display the results
                System.out.println("Union: " + union);
                System.out.println("Difference: " + difference);
                System.out.println("Intersection: " + intersection);
            }
        }
        `,
  },
  {
    que:`3.	Store pairs of 10 states and its capital in a map. Your program should prompt the user to enter a state and should display the capital for the state.`,
    ans:`import java.util.HashMap;
    import java.util.Map;
    import java.util.Scanner;
    
    public class StateCapitalMap {
        public static void main(String[] args) {
            // Create a map to store state-capital pairs
            Map<String, String> stateCapitalMap = new HashMap<>();
            
            // Add state-capital pairs to the map
            stateCapitalMap.put("California", "Sacramento");
            stateCapitalMap.put("Texas", "Austin");
            stateCapitalMap.put("New York", "Albany");
            stateCapitalMap.put("Florida", "Tallahassee");
            stateCapitalMap.put("Illinois", "Springfield");
            stateCapitalMap.put("Georgia", "Atlanta");
            stateCapitalMap.put("Ohio", "Columbus");
            stateCapitalMap.put("Michigan", "Lansing");
            stateCapitalMap.put("Washington", "Olympia");
            stateCapitalMap.put("Colorado", "Denver");
    
            // Create a scanner object to read user input
            Scanner scanner = new Scanner(System.in);
    
            // Prompt the user to enter a state
            System.out.print("Enter a state: ");
            String state = scanner.nextLine();
    
            // Check if the entered state exists in the map
            if (stateCapitalMap.containsKey(state)) {
                String capital = stateCapitalMap.get(state);
                System.out.println("Capital of " + state + " is " + capital);
            } else {
                System.out.println("Capital not found for " + state);
            }
    
            // Close the scanner
            scanner.close();
        }
    }
    `
  }
];
export default p_11;
