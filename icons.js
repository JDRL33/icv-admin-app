import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

export const HomeIcon = (props) => {
  return <FontAwesome name="home" size={24} color="black" {...props} />;
};
export const SettingIcon = (props) => {
  return <Feather name="settings" size={24} color="black" {...props} />;
};
export const UserIcon = (props) => {
  return <FontAwesome name="user-o" size={24} color="black" {...props} />;
};

export const EditIcon = (props) => {
  return <Feather name="edit" size={24} color="black" {...props} />;
};
