const p_8 = [
  {
    que: `1.	Write a program that displays five texts vertically, as shown in Figure. Set a random color and opacity for each text and set the font of each text to Times Roman, bold, italic, and 22 pixels.`,
    ans: `import javax.swing.*;
        import java.awt.*;
        import java.awt.event.WindowAdapter;
        import java.awt.event.WindowEvent;
        
        public class VerticalTextDisplay {
            public static void main(String[] args) {
                SwingUtilities.invokeLater(() -> {
                    JFrame frame = new JFrame("Vertical Text Display");
                    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                    frame.setLayout(new GridLayout(5, 1));
        
        
                    for (int i = 0; i < 5; i++) {
                        String text = "java  " ;
                        JLabel label = new JLabel(text, SwingConstants.CENTER);
                        label.setFont(new Font("Times New Roman", Font.BOLD | Font.ITALIC, 22));
        
                        // Set random color with opacity
                        
                        label.setOpaque(true);
                       
                       
                        frame.add(label);
                    }
        
                    frame.addWindowListener(new WindowAdapter() {
                        @Override
                        public void windowClosing(WindowEvent e) {
                            super.windowClosing(e);
                            System.exit(0);
                        }
                    });
        
                    frame.pack();
                    frame.setLocationRelativeTo(null);
                    frame.setVisible(true);
                });
            }
        }
        `,
  },
  {
    que: `2.	Write a program that uses a bar chart to display the percentages of the overall grade represented by projects, quizzes, midterm exams, and the final exam, as shown in Figure b. Suppose that projects take 20 percent and are displayed in red, quizzes take 10 percent and are displayed in blue, midterm exams take 30 percent and are displayed in green, and the final exam takes 40 percent and is displayed in orange. Use the Rectangle class to display the bars. Interested readers may explore the JavaFXBarChart class for further study.`,
    ans: `import javax.swing.*;
        import java.awt.*;
        
        public class BarChartSwing {
            public static void main(String[] args) {
                SwingUtilities.invokeLater(() -> {
                    JFrame frame = new JFrame("Bar Chart Example");
                    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                    frame.setLayout(new BorderLayout());
        
                    int width = 400;
                    int height = 200;
                    int margin = 20;
                    int barWidth = 40;
                    int space = 10; // Space between label and percentage
        
                    JPanel chartPanel = new JPanel() {
                        @Override
                        public void paintComponent(Graphics g) {
                            super.paintComponent(g);
                            g.setColor(Color.WHITE);
                            g.fillRect(0, 0, width, height);
        
                            String[] labels = {"Projects", "Quizzes", "Midterm", "Final"};
                            int[] percentages = {20, 10, 30, 40};
                            Color[] colors = {Color.RED, Color.BLUE, Color.GREEN, Color.ORANGE};
        
                            for (int i = 0; i < labels.length; i++) {
                                int x = margin + i * (barWidth + margin);
                                int y = height - margin - (int) (height * (double) percentages[i] / 100);
                                int barHeight = y - margin;
        
                                g.setColor(colors[i]);
                                g.fillRect(x, y, barWidth, barHeight);
        
                                g.setColor(Color.BLACK);
                                g.setFont(new Font("SansSerif", Font.BOLD, 12));
                                String labelWithPercentage = labels[i] + " (" + percentages[i] + "%)";
                                int labelWidth = g.getFontMetrics().stringWidth(labelWithPercentage);
                                g.drawString(labelWithPercentage, x + (barWidth - labelWidth) / 2, y - space);
                            }
                        }
                    };
                    chartPanel.setPreferredSize(new Dimension(width, height));
                    frame.add(chartPanel, BorderLayout.CENTER);
        
                    frame.pack();
                    frame.setLocationRelativeTo(null);
                    frame.setVisible(true);
                });
            }
        }
        `,
  },
  {
    que: `3.	Write a program that displays a rectanguloid, as shown in Figure a. The cube should grow and shrink as the window grows or shrinks.`,
    ans: ``,
  },
];
export default p_8;
