import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { FiArrowDownCircle } from 'react-icons/fi'

// images
import Img1 from '/public/images/tony_judge_solo.png'
import Img2 from '/public/images/mannyg.jpg'
import Img3 from '/public/images/willowparis.jpg'

// styles
import styles from './Hero.module.scss'

const Hero = () => {

  const desktop = useMediaQuery(768)

  return (
    <motion.div className={styles.hero}>
    <div className="text">
          <motion.p className={styles.hero_subtitle}
          initial={{opacity: 0, x: -400,}}
            animate={{
              opacity: 1,
              x: 0,            
            }}
            transition={{duration: 0.4, delay: 1.2, ease: 'easeInOut'}}
          >4 da lockers</motion.p>
          <motion.h1 className={styles.hero_title}
           initial={{opacity: 0, x: -200,}}
           animate={{
             opacity: 1,
             x: 0,
             width: '100%',
            }}
            transition={{duration: .8, delay: 1.6, ease: 'easeInOut',}}
          >Funk
      </motion.h1>
          <motion.h1 className={styles.hero_title}
           initial={{opacity: 0, x: 200,}}
           animate={{
             opacity: 1,
             x: 0,
             width: '100%',
            }}
            transition={{duration: 0.8, delay: 1.8, ease: 'easeInOut',}}
          >Camp
      </motion.h1>
          <motion.p className={styles.desc}
             initial={{opacity: 0 }}
             animate={{
               opacity: 1,
               width: '100%',
              }}
              transition={{duration: 1.2, delay: 2, ease: 'easeInOut'}}
          >
          Swedens first locking camp that brought the pioneers to share with european locking community
        </motion.p>
    </div>

        <motion.div className={styles.img_1}
        initial={{
          opacity: 0, width: 0}}
         animate={{
           opacity: 1,
           width: desktop ? '90vw' : '60%',
           height: desktop ? '40vh' : '40vh'
          }}
          transition={{duration: 0.4, delay: 2, ease: 'easeInOut'}}
      >
        <Image
          className={styles.img}
          src={Img1}
          alt='tony gogo soultrain cap'
          fill
          style={{objectFit: 'cover', objectPosition: 'top center', zIndex: '-1'}}
        />
        </motion.div>

        <motion.div className={styles.img_2}
         initial={{opacity: 0, width: 0,}}
         animate={{
           opacity: 1,
           width: desktop ? '30vw' : '25vw',
           height: desktop ? '40vh' : '40vh'
          }}
          transition={{duration: 0.4, delay: 2.4, ease: 'easeInOut'}}
      >
        <Image
          className={styles.img}
          src={Img2}
          alt='manny'
          fill
          style={{objectFit: 'cover', objectPosition: 'top center', zIndex: '1'}}
        />

        </motion.div>

        <motion.div className={styles.img_3}
         initial={{opacity: 0, width: 0,}}
         animate={{
           opacity: 1,
           width: desktop ? '40vw' : '40vw',
           height: desktop ? '20vh' : '40vh'
          }}
          transition={{duration: 0.4, delay: 2.2, ease: 'easeInOut'}}
      >
        <Image
          className={styles.img}
          src={Img3}
          alt='willow'
          fill
          style={{objectFit: 'cover', objectPosition: 'top center', zIndex: '-1'}}
        />
        </motion.div>
        <motion.div
          className={styles.readmore}
          initial={{opacity: 0, width: 0,}}
          animate={{
            opacity: 1,
            width: '12rem',
           }}
           transition={{duration: 0.4, delay: 2.4, ease: 'easeInOut'}}
          >
            <Link href="#bio" scroll={false}>
            <FiArrowDownCircle className={styles.icon} />
            </Link>
          </motion.div>
      </motion.div>
  )
}

export default Hero