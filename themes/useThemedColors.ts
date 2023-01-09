import { useColorScheme } from "react-native";
import Colors from "../@types/Colors";
import { dark } from "./dark";
import { light } from "./light";

export default function useThemedColors(): Colors {
    const colorScheme = useColorScheme();

    const isDark = colorScheme === 'dark';

    return {
        text: isDark ? dark.text : light.text,
        backgroundColor: isDark ? dark.backgroundColor : light.backgroundColor
    }
}
