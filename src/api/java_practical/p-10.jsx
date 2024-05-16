const p_10 = [
    {
        que:`1.	Write a recursive method that converts a decimal number into a binary number as a string. The method header is: public static String dec2Bin(int value).`,
        ans:`public class DecimalToBinary {
            public static void main(String[] args) {
                int decimal = 25;
                String binary = dec2Bin(decimal);
                System.out.println("Decimal: " + decimal);
                System.out.println("Binary: " + binary);
            }
        
            public static String dec2Bin(int value) {
                if (value == 0) {
                    return "0";
                } else if (value == 1) {
                    return "1";
                } else {
                    // Recursive call to convert the quotient to binary
                    return dec2Bin(value / 2) + value % 2;
                }
            }
        }
        `
    },
    {
        que:`2.	Write the following method that returns a new ArrayList. The new list contains the non-duplicate elements from the original list.
        public static <E>ArrayList<E>removeDuplicates(ArrayList<E> list)
        `,
        ans:`import java.util.ArrayList;
        import java.util.HashSet;
        import java.util.List;
        
        public class RemoveDuplicates {
            public static void main(String[] args) {
                ArrayList<Integer> originalList = new ArrayList<>();
                originalList.add(1);
                originalList.add(2);
                originalList.add(3);
                originalList.add(1);
                originalList.add(4);
                originalList.add(2);
        
                ArrayList<Integer> nonDuplicateList = removeDuplicates(originalList);
                System.out.println("Original List: " + originalList);
                System.out.println("Non-Duplicate List: " + nonDuplicateList);
            }
        
            public static <E> ArrayList<E> removeDuplicates(ArrayList<E> list) {
                HashSet<E> set = new HashSet<>(list); // Using HashSet to remove duplicates
                return new ArrayList<>(set); // Convert HashSet back to ArrayList
            }
        }
        `
    },
    {
        que:`3.	Implement the following method using binary search.
        public static <E extends Comparable<E>>
        intbinarySearch(E list, E key)
        `,
        ans:`import java.util.List;

        public class BinarySearch {
            public static void main(String[] args) {
                List<Integer> list = List.of(1, 3, 5, 7, 9, 11, 13, 15);
                int key = 7;
                int index = binarySearch(list, key);
                if (index != -1) {
                    System.out.println("Key " + key + " found at index " + index);
                } else {
                    System.out.println("Key " + key + " not found in the list.");
                }
            }
        
            public static <E extends Comparable<E>> int binarySearch(List<E> list, E key) {
                int low = 0;
                int high = list.size() - 1;
        
                while (low <= high) {
                    int mid = (low + high) / 2;
                    E midValue = list.get(mid);
                    int cmp = key.compareTo(midValue);
        
                    if (cmp == 0) {
                        return mid; // Key found
                    } else if (cmp < 0) {
                        high = mid - 1; // Search in the left half
                    } else {
                        low = mid + 1; // Search in the right half
                    }
                }
        
                return -1; // Key not found
            }
        }
        `
    }
]
export default p_10;
