import React, { useState } from 'react'
import { SectionWrapper } from '../../hoc'
import { motion } from 'framer-motion'
import { textVariant, staggerContainer } from '../../utils/motion'
import { technologies } from '../../constants'
import { styles } from '../../styles'
import { Row } from '.'
 
const Skills = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <motion.section
    variants={staggerContainer()}
    initial={'hidden'}
    whileInView={'show'}
    viewport={{once: true, amount: 0.25}}
    >
        <motion.div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
         variants={textVariant()}>
          <p className={styles.sectionSubText}>My skills</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>
        <div className="flex justify-center items-center h-24 md:h-32 overflow-hidden bg-tertiary">
        <Row speed={20} playing={playing}>
          {technologies.map((logo, idx) => (
            <div key={idx} className=" text-center w-24 h-24 md:w-32 md:h-32 flex flex-col justify-between mx-3 p-3 transition-all ease-in-out" >
                  <img className='w-full h-full' src={logo?.icon} />
              </div>
          ))}
        </Row>
      </div>
    </motion.section>
  )
}

export default Skills;