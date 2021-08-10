import {
  WidthProperty,
  AlignItemsProperty,
  FlexDirectionProperty,
  JustifyContentProperty,
} from "@material-ui/styles/node_modules/csstype";
import { styled } from "@material-ui/core";
import Is from "@flk/supportive-is";

type GridPropType = {
  children: React.ReactNode;
  width?: WidthProperty<string | 0> | "fullWidth";
  repeat?: number | "auto-fill" | "auto-fit";
  minmax?: {
    min: WidthProperty<string | 0>;
    max: WidthProperty<string | 0>;
  };
  repeatPattern?: String;
  gap?: number;
  gapUnit?: "rem" | "px" | "ch" | "em";
  styles?: { [key: string]: string | number };
};

export const Grid = ({
  children,
  width,
  repeat,
  minmax,
  repeatPattern,
  gap,
  gapUnit,
  styles,
}: GridPropType) => {
  const propertyReslover = (property: number, propertyUnit: string | null) => {
    if (propertyUnit) {
      return `${property}${propertyUnit}`;
    } else {
      return `${property}rem`;
    }
  };

  const resolvegridTemplateColumns = () => {
    let repeatProp;
    if (repeat && minmax && !Is.empty(minmax)) {
      repeatProp = `repeat(${repeat}, minmax(${minmax.min}, ${minmax.max}))`;
    } else if (repeat && repeatPattern) {
      repeatProp = `repeat(${repeat}, ${repeatPattern})`;
    } else {
      repeatProp = `repeat(auto-fill, minmax(300px, 1fr))`;
    }
    return repeatProp;
  };

  const Container = styled("div")({
    display: "grid",
    gridTemplateColumns: resolvegridTemplateColumns(),
    gap: gap ? propertyReslover(gap, gapUnit ? gapUnit : null) : 0,
    width:
      width === "fullWidth"
        ? "100%"
        : width && width !== "fullWidth"
        ? width
        : "100%",
    ...styles,
  });

  return <Container>{children}</Container>;
};

interface FlexWrapperProps {
  /**
   * The children component(s) content
   */
  children: React.ReactNode;
  /**
   * specifies the gap between children components @default 0
   */
  gap?: number;
  /**
   * specifies the gap unit @default "rem"
   */
  gapUnit?: "rem" | "px" | "ch" | "em";
  direction?: FlexDirectionProperty;
  justifyContent?: JustifyContentProperty;
  align?: AlignItemsProperty;
  width?: WidthProperty<string | 0> | "fullWidth";
  style?: { [key: string]: string | number };
  onClick?: () => void;
}

export const Flex = ({
  gap,
  align,
  direction,
  gapUnit,
  justifyContent,
  width,
  children,
  style,
  onClick,
}: FlexWrapperProps) => {
  const gapReslover = (gap: number, gapUnit: string | null) => {
    if (gapUnit) {
      return `${gap}${gapUnit}`;
    } else {
      return `${gap}rem`;
    }
  };
  const Container = styled("div")({
    display: "flex",
    flexDirection: direction ? direction : "row",
    alignItems: align ? align : "flex-start",
    justifyContent: justifyContent ? justifyContent : "flex-start",
    gap: gap ? gapReslover(gap, gapUnit ? gapUnit : null) : 0,
    width:
      width === "fullWidth"
        ? "100%"
        : width && width !== "fullWidth"
        ? width
        : "fit-content",
  });

  return (
    <Container style={style} onClick={onClick}>
      {children}
    </Container>
  );
};
