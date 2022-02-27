import styles from './styles.module.scss'

interface BoxProps {
  imgURL?: any
}

export function Box({ imgURL }: BoxProps) {
  return (
    <>
      <div className={styles.container}>
        {imgURL ? (
          <img
            src={imgURL}
            alt="meme"
            draggable={false}
            style={{ height: '270px', width: '285px', borderRadius: '1rem' }}
          />
        ) : null}
      </div>
    </>
  )
}
