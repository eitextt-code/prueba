import { motion } from "framer-motion";

export default function Hero(){

return(

<section

className="h-screen bg-cover bg-center flex items-center"

style={{

backgroundImage:

"url('/images/hero.jpg')"

}}

>

<div className="bg-black/50 absolute inset-0"/>

<div className="relative z-10 text-white max-w-3xl ml-24">

<motion.h1

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="text-7xl mb-6"

>

Café Casa Quintano

</motion.h1>

<p className="text-2xl mb-10">

Tradición, producto y sabor.

</p>

<button

className="bg-[#556B2F] px-10 py-4 rounded-full hover:bg-[#3f5122] transition"

>

Reservar mesa

</button>

</div>

</section>

)

}
