'use client'

import BlueButton from "@/components/BlueButton"
import { useState } from "react"

export default function TestPage() {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(previous => previous + 1)
    }
    return (
        <>  
            <p>{`You've clicked ${count} times`}</p>
            <BlueButton buttonText="Test" onClick={handleCount}/>
            {count >= 20 && (
                <span>Selamat, Sudah Pencet 20x !!!</span>
            )}
            
        </>
    )
}