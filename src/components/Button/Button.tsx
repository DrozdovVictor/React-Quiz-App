interface ButtonProps {
  children?: string
  className?: string
}

function Button(props: ButtonProps) {
  const { children, className } = props
  return (
    <button
      type="button"
      className={
        className
          ? className
          : "px-5 rounded-[15px] duration-300 hover:cursor-pointer font-semibold h-[45px]"
      }
    >
      {children}
    </button>
  )
}

export default Button
