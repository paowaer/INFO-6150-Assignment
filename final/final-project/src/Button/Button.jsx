import "./Button.css";

import PropTypes from "prop-types";

function Button({
  children,
  ariaLabel,
  className,
  disabled = false,
  onClick,
  onSubmit,
  type = "button",
  visual = "button",
}) {
  let buttonClass = "button";
  if (visual === "link") {
    buttonClass = "button-link";
  }

  const handleClick = () => {
    if (type === "submit" && onSubmit) {
      onSubmit();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${buttonClass} ${className}`}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  visual: PropTypes.oneOf(["button", "link"]),
  ariaLabel: PropTypes.string,
};

export default Button;
