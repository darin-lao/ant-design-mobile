interface ButtonProps {
  type?: 'primary' | 'warning' | 'ghost';
  size?: 'large' | 'small';
  activeStyle?: boolean|Object;
  disabled?: boolean;
  onClick?: (x: any) => void;
  style?: Object|Array<Object>;
  /** web only */
  inline?: boolean;
  across?: boolean;
  loading?: boolean;
  icon?: any;
  prefixCls?: string;
  /** rn only */
  onPressIn?: (x: any) => void;
  onPressOut?: (x: any) => void;
  onShowUnderlay?: (x: any) => void;
  onHideUnderlay?: (x: any) => void;
}

export default ButtonProps;
