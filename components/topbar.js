import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const TopBar = ({ title, subtitle, props }) => {
  return (
    <View {...props}>
      <Text variant="displaySmall" style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle} variant="headlineLarge">
        {subtitle}
      </Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  title: { paddingTop: 20, fontWeight: "bold", textAlign: "center" },
  subtitle: { textAlign: "center" },
});
