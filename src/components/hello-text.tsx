"use client"

import TypewriterComponent from "typewriter-effect"

const HelloText = () => {
    return (
        <div className="w-full h-20 flex justify-center items-center px-4">
            <h1 className="text-xl">
            <TypewriterComponent
                options={{
                    strings: [
                        "Welcome to Barlus Page!",
                        "This is Barlus page, enjoy your stay!",
                        "You know?, Barlus really 15years!",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 50,
                }}
            />
        </h1>
        </div>
    )
}

export default HelloText