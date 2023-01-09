import { StyleSheet, Text as DefaultText } from 'react-native';
import useThemedColors from '../themes/useThemedColors';

export function Text(props: DefaultText['props']) {
    const themedColors = useThemedColors();
    const styles = StyleSheet.create({
        text: {
            color: themedColors.text,
            ...(props.style as object),
        }
    });

    return <DefaultText
        {...props}
        style={styles.text}
    />
}
