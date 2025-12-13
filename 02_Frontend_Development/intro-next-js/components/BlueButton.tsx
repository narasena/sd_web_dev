interface IBlueButtonProps {
    buttonText: string
    onClick: () => void
}

// component ⬇️⬇️
export default function BlueButton(
    // {buttonText}:{buttonText:string}
    props:IBlueButtonProps

) {
    return (
        <button type="button" onClick={props.onClick} className="p-2 w-44
             h-16 flex justify-center items-center font-bold bg-blue-400 text-2xl text-blue-900 rounded-xl hover:bg-blue-300 active:ring-4 active:ring-blue-300">
            {/* {buttonText} */}
            {props.buttonText}
        </button>
    )
}