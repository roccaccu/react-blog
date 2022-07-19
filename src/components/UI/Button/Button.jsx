import styles from './Button.module.css'

const Button = ({ children, ...props }) => {
	console.log({ children })
	return <button {...props}>{children}</button>
}

export default Button
