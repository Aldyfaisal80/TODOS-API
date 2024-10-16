type ButtonProps = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit'
    form?: string
    disable?: boolean
    confirm?: boolean
}

const ButtonPrimary = (props: ButtonProps) => {
    const { children, className, onClick, type, form, disable, confirm } = props
    return (
        <button
            className={`bg-blue-500 px-6 py-3 border-2 border-black rounded-none shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:translate-y-2 hover:translate-x-2 hover:shadow-none ${className}`}
            onClick={onClick}
            type={type}
            form={form}
            disabled={disable}
            data-confirm={confirm}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary
