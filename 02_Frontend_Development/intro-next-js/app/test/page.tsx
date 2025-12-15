'use client'

import BlueButton from "@/components/BlueButton"
import { useEffect, useRef, useState } from "react"

export default function TestPage() {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(previous => previous + 1)
        // doubleCalculation() // count didalam fungsi ini itu menggunakan data yang 'stale'
    }
    // const [calculation, setCalculation] = useState(0)
    // const doubleCalculation = () => {
    //     setCalculation(count * 2) 
    // }
    // useEffect(()=>{
    //     doubleCalculation()
    // },[count])
    const renderCount = useRef(0)

    useEffect(() => { // ini comment
        setTimeout(()=>{
            setCount(prev => prev +1)
        },1000)

        renderCount.current = renderCount.current + 1
    })



    return (
        <>  
            <p id="countDisplay">{`You've clicked ${count} times`}</p>
            <BlueButton buttonText="Test" onClick={handleCount}/>
            {count >= 20 && (
                <span>Selamat, Sudah Pencet 20x !!!</span>
            )}
            {/* <p>Calculation: {calculation}</p> */}
            <p>How Many Renders: {renderCount.current}</p>
            
        </>
    )
}