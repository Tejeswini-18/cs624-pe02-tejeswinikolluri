import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState("");

  const coreCourses = [
    "CS 504 Software Engineering",
    "CS 506 Programming for Computing",
    "CS 519 Cloud Computing Overview",
    "CS 533 Computer Architecture",
    "CS 547 Secure Systems and Programs",
    "CS 622 Discrete Math and Algorithms for Computing",
    "DS 510 Artificial Intelligence for Data Science",
    "DS 620 Machine Learning & Deep Learning",
  ];

  const depthCourses = [
    "CS 624 Full-Stack Development - Mobile App",
    "CS 628 Full-Stack Development - Web App",
  ];

  const capstoneCourses = [
    "CS 687 Computer Science Capstone",
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel="Course application icon"
        />

        <Text style={styles.question}>
          Which course did you like?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          autoCapitalize="characters"
          accessibilityLabel="Enter your favorite course"
        />

        {favoriteCourse.trim().length > 0 && (
          <Text style={styles.favorite}>
            Your favorite course: {favoriteCourse.trim()}
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Core Requirements (24 Credits)
        </Text>

        {coreCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Depth of Study (6 Credits)
        </Text>

        {depthCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Capstone (3 Credits)
        </Text>

        {capstoneCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 28,
  },

  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  question: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#222222",
  },

  input: {
    width: "100%",
    minHeight: 44,
    borderWidth: 1,
    borderColor: "#888888",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#222222",
    backgroundColor: "#FFFFFF",
  },

  favorite: {
    alignSelf: "flex-start",
    marginTop: 10,
    fontSize: 14,
    color: "#333333",
  },

  section: {
    marginBottom: 26,
  },

  sectionTitle: {
    backgroundColor: "#FFFF00",
    color: "#000000",
    fontSize: 23,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },

  course: {
    fontSize: 15,
    lineHeight: 23,
    color: "#222222",
    marginBottom: 5,
  },
});

export default CoreComponents;