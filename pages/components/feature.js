import styles from './../../styles/Feature.module.css';

const FeatureCards = () => {
    return <div className={styles.cardContainer}>
    </div>
}

export default function Feature() {
    return <>
        <div id='feature' className={styles.container}>
            <span className={styles.title}>Countless choices, just for one thing</span>
        </div>
    </>
};

const CARDS = [
    {
        picture_path: './',
        picture_text: 'Car'
    },
    {
        picture_path: './',
        picture_text: 'Bike'
    }
]