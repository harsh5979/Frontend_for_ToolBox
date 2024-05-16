const p_12 = [
    {
        que:`1.	Write a program to create a thread extending Thread class and demonstrate the use of slip() method.`,
        ans:`public class MyThread extends Thread {
            public void run() {
                System.out.println("Thread started.");
                try {
                    // Sleep for 2 seconds
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    System.out.println("Thread interrupted.");
                }
                System.out.println("Thread completed.");
            }
        
            public static void main(String[] args) {
                MyThread thread = new MyThread();
                thread.start(); // Start the thread
        
                // Main thread continues execution
                for (int i = 1; i <= 5; i++) {
                    System.out.println("Main thread executing: " + i);
                    try {
                        // Sleep for 1 second
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        System.out.println("Main thread interrupted.");
                    }
                }
            }
        }
        `
    },
    {
        que:`2.	Write a program to create a thread implementing Runnable interface and demonstrate the use of join() method.`,
        ans:`public class MyRunnable implements Runnable {
            public void run() {
                System.out.println("Thread started.");
                try {
                    // Sleep for 2 seconds
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    System.out.println("Thread interrupted.");
                }
                System.out.println("Thread completed.");
            }
        
            public static void main(String[] args) {
                MyRunnable myRunnable = new MyRunnable();
                Thread thread = new Thread(myRunnable);
                thread.start(); // Start the thread
        
                try {
                    // Main thread waits for the created thread to finish
                    thread.join();
                } catch (InterruptedException e) {
                    System.out.println("Main thread interrupted while waiting.");
                }
        
                System.out.println("Main thread completed.");
            }
        }
        `
    },
    {
        que:`3.  Write a program that launches 10 threads. Each thread adds 1 to a variable sum that initially is 0. Define an Integer wrapper object to hold sum. Run the program with and without synchronization to see its effect.`,
        ans:`public class ThreadExample {
            private static Integer sum = 0;
            private static final Object lock = new Object();
        
            public static void main(String[] args) throws InterruptedException {
                // Without synchronization
                System.out.println("Without synchronization:");
                launchThreads(false);
        
                // With synchronization
                System.out.println("With synchronization:");
                launchThreads(true);
            }
        
            private static void launchThreads(boolean synchronize) throws InterruptedException {
                Thread[] threads = new Thread[10];
                for (int i = 0; i < threads.length; i++) {
                    threads[i] = new Thread(() -> {
                        if (synchronize) {
                            synchronized (lock) {
                                sum += 1;
                            }
                        } else {
                            sum += 1;
                        }
                    });
                    threads[i].start();
                }
        
                // Wait for all threads to finish
                for (Thread thread : threads) {
                    thread.join();
                }
        
                System.out.println("Sum: " + sum);
            }
        }
        `
    }
];
export default p_12;
