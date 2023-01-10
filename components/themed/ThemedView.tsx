import { StyleSheet, View as DefaultView } from 'react-native';
import useThemedColors from '../../themes/useThemedColors';

export function View(props: DefaultView['props']) {
    const themedColors = useThemedColors();

    const styles = StyleSheet.create({
        view: {
            backgroundColor: themedColors.backgroundColor,
            ...(props.style as object),
        }
    });

    return <DefaultView
        {...props}
        style={styles.view}
    />
}
