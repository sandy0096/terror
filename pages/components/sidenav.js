import styles from './../../styles/SideNav.module.css';
import { useEffect } from 'react';

const Links = [
    {
        name: 'About',
    },
    {
        name: 'Contact'
    },
    {
        name: 'Share'
    },
    {
        name: 'Donate'
    },
    {
        name: 'Hire me?'
    }

]

function SideNav(props) {
    const { isOpen } = props;

    useEffect(() => {
        if (isOpen) {
            document.getElementById('sidenav').style.width = '300px'
        }
        else {
            document.getElementById('sidenav').style.width = '0px'
        }
    }, [isOpen])

    return <>
        <div id="sidenav" className={styles.sidenav}>
            {Links.map(item => {
                return <a key={item.name} href="#" className={styles.links}>{item.name}</a>
            })}
        </div>
    </>
}

export default SideNav;