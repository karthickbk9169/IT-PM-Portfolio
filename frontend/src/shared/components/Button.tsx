import './Button.css'

type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  )
}