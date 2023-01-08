import { StyledOptions } from "@emotion/styled";
import { Theme } from "@mui/material";

/**
 * Generates a styled component options object which excludes unwanted props
 * from being forwarded to the styled element.
 *
 * Use this to exclude props passed only for the sake of deriving styles.
 *
 * @params Any number of strings representing the props you want to intercept
 * @returns A styled options object with `shouldForwardProp` function set
 */
export const dontForwardProps = (...unwantedProps: string[]): StyledOptions<Theme> => ({
  shouldForwardProp: (prop: string) => !unwantedProps.includes(prop),
});
