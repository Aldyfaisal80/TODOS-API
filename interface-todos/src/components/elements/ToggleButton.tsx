type ToggleBuuttonProps = {
    todoID: string
    className?: string
}

export const ToggleButton = (props: ToggleBuuttonProps) => {
    const { todoID, className } = props
    return (
        <div className="flex gap-4 items-center">
            <label htmlFor="checkbox" className={`cursor-pointer ${className}`}> {todoID}</label>
            <input type="checkbox" id="status" name="status" className="w-4 h-4" /><p>Done</p>
        </div>
    )
}