import { useVoice } from "../context/VoiceContext";

export default function VoiceWave() {

    const { volume } = useVoice();

    const bars = Array.from({ length: 20 });

    return (

        <div className="flex items-end gap-1 h-20">

            {

                bars.map((_, index) => {

                    const height =

                        10 +

                        volume *

                        250 *

                        Math.random();

                    return (

                        <div

                            key={index}

                            style={{

                                height:

                                    `${height}px`

                            }}

                            className="w-2 rounded-full bg-cyan-400 transition-all duration-75"

                        />

                    );

                })

            }

        </div>

    );

}