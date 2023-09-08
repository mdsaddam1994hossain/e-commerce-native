export interface IBreakPoints {
  phone: number;
  tablet: number;
  largeTablet: number;
}

export interface ISectionHeader {
  fontSize: number;
  color: string;
  marginBottom?: string;
}

export interface IButton {
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  paddingHorizontal?: string;
  textTransform?: string;
}

export interface IBoxVariants {
  elevated: {
    padding: {
      phone: string;
      tablet: string;
    };
    shadowColor: string;
    shadowOpacity: number;
    shadowOffset: { width: number; height: number };
    shadowRadius: number;
    elevation: number;
  };
}

export interface IButtonVariants {
  defaults: {
    height: number;
    borderWidth: number;
    alignItems: string;
    justifyContent: string;
    paddingHorizontal: string;
    marginEnd: string;
    borderColor: string;
    borderRadius: number;
  };
  primary: {
    backgroundColor: string;
  };
  secondary: {
    backgroundColor: string;
  };
  listPrimary: {
    height: number;
    paddingHorizontal: string;
    backgroundColor: string;
  };
  listSecondary: {
    height: 34;
    paddingHorizontal: string;
    backgroundColor: string;
  };
}

export interface ICardsVariant {
  defaults: {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    padding: string;
  };
  small: {
    width: number;
  };
  medium: {
    width: number;
  };
  large: {
    width: number;
  };
  row: {
    width: number;
  };
  floating: {
    height: number;
    borderRadius: number;
    paddingHorizontal: string;
    paddingVertical: string;
  };
}

export interface IAvatarVariants {
  small: {
    width: number;
    height: number;
  };
  medium: {
    width: number;
    height: number;
  };
  large: {
    width: number;
    height: number;
  };
}

export interface IDividerVariants {
  small: {
    height: number;
    color: string;
    width: string;
  };
}

export interface IIconVariants {
  small: {
    width: number;
    height: number;
  };
  medium: {
    width: number;
    height: number;
  };
}
