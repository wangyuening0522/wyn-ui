import react, { ReactNode } from "react";
import classnames from "classnames";
import "./_style.scss";
// 根据枚举变量使用全局样式string
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}
export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: ReactNode;
  href?: string;
}
// 无法添加a和button的本身html的样式，融入本身样式后&成buttonProps
// 但是这样会导致两个类型都是必填的，所以使用partial?
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
// 组件传参规范
const Button: react.FC<ButtonProps> = (props) => {
  const { btnType, size, disabled, href, className, children, ...restProps } =
    props;
  // 当link型的btn时，才能禁用
  const classes = classnames("btn",className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return <a className={classes} href={href} {...restProps}></a>;
  } else {
    return (
      // 传入对象，简写mark restProps={name:"a"} js外面包着一个{},所以{...restProps}==>name="a"
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
