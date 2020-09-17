import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

import { TrendingProps } from '../../Interfaces/TrendingsProps';
import { useApi } from '../../hooks/apiContext';

import styles from './index.module.css';

interface SlideProps {
  slides: TrendingProps[]
}

const Slide: React.FC<SlideProps> = ({ slides }) => {

  const { urlPoster } = useApi()

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);


  React.useEffect(() => {
    const { width } = contentRef.current?.getBoundingClientRect() as { width: number };
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <Link to={`/movie/${slide.id}`} key={slide.id} className={styles.item}>
            <img src={`${urlPoster}${slide.poster_path}`} alt={slide.original_title} />
          </Link>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
