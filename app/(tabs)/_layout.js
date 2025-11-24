import { Tabs } from "expo-router";
import { HomeIcon, EditIcon, UserIcon } from "../../icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          title: "Editar",
          tabBarIcon: ({ color }) => <EditIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Usuario",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
