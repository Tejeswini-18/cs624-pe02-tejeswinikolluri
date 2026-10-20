# cs624-pe02-tejeswinikolluri

# Input

The application accepts a favorite course name from the user through a React Native TextInput component. The input field allows users to enter their preferred course, such as CS624. The application also uses the `icon.png` image stored in the project's assets folder. The course information is predefined in the application and organized into three categories: Core Requirements (24 Credits), Depth of Study (6 Credits), and Capstone (3 Credits).

# Process

The application is developed using React Native and TypeScript. An arrow function defines the functional component. The useState hook manages the favorite course input, while the onChangeText event updates the state whenever the user types. The View component organizes the interface, Text displays course names and headings, ScrollView enables vertical scrolling, Image displays the application icon, and TextInput collects user input. StyleSheet defines the internal styles, including font sizes, spacing, colors, and input borders. The courses are rendered dynamically using the JavaScript map method.

# Output

The application displays the icon, a favorite course input field, and the complete list of courses organized by category. The user can enter a favorite course and see the entered value displayed on the screen. The yellow section headings distinguish the course categories, and the scrollable layout allows users to view all courses on a mobile device.