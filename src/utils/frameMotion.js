

export const frameMotion = (d,y=0,x=0,z) => {
    return {
        hidden: {
            opacity: 0,
            y: y,
            x : x
        },
        show: {
            opacity: 1,
            y: 0,
            x  : 0,
            transition: {
                duration: z,
                delay : d,
                ease: "easeInOut"
            }
        }
    }
};
// initial={{opacity:0, scale:0, translateY:-10}}  whileInView={{opacity:1, scale:1}}
// viewport={{amount:0.5, once: false }}