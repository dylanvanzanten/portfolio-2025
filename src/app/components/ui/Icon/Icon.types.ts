export type PossibleIcons = "send" | "user";

export type IconProps = {
  name: PossibleIcons;
  size?: number;
  className?: string;
  color?: string;
};
