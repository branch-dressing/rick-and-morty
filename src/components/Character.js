import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import styles from './App.css';

const arrayOfStats = (stats) => {
  return stats.map((item, i) => <Stats key={i} title={item[0]} description={item[1]} />);
};

function Character(props) {
  const { character } = props;
  const { characterName, id, stats } = character;
  const statsArray = Object.entries(stats);
  return (
    <article className={styles.charCardWrapper}>
      <div>
        <div className={styles.charCardIamgeWrapper} >
          <img className={styles.image} src="https://media.gamestop.com/i/gamestop/10172749/POP-Animation-Rick-and-Morty-Exoskeleton-Snowball-6-inch?$zoom$"/>
        </div>

        <div className={styles.title}>
          <h2 className={styles.name}>{characterName}</h2>
          <p>id: {id} - created X years ago</p>
        </div>
      </div>


      <div>
        {arrayOfStats(statsArray)}
      </div>
    </article>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
