import clsx from 'clsx';

type ButtonProps = {
  size?: 'sm' | 'small' | 'lg' | 'large' | 'medium' | null;
  outline?: boolean;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark';
  block?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  label: string;
};

// Build the Button component with the specified props
export const Button = ({
  size = null, // The size of the button (e.g., 'sm', 'lg', or null)
  outline = false, // Whether the button should be an outline button
  variant = 'primary', // The color variant of the button
  block = false, // Whether the button should be a block-level button
  disabled = false, // Whether the button should be disabled
  className, // Custom classes for the button
  style, // Custom styles for the button
  label, // The text of the button
}: ButtonProps) => {
  const sizeMap = {
    sm: 'sm',
    small: 'sm',
    lg: 'lg',
    large: 'lg',
    medium: null,
  };
  const buttonSize = size ? sizeMap[size] : '';
  const sizeClass = buttonSize ? `button--${buttonSize}` : '';
  const outlineClass = outline ? 'button--outline' : '';
  const variantClass = variant ? `button--${variant}` : '';
  const blockClass = block ? 'button--block' : '';
  const disabledClass = disabled ? 'disabled' : '';

  return (
    <button
      className={clsx(
        'button',
        sizeClass,
        outlineClass,
        variantClass,
        blockClass,
        disabledClass,
        className
      )}
      style={style}
      role="button"
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
