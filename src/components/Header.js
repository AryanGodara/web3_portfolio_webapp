// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Aryan Godara" />

            <div className='header__content'>
                <h1>Hi, I'm Aryan Godara</h1>
                <p>Web3 Developer</p>
                <button className='button'><a href="mailto:aryangodara03@gmail.com">Get In Touch</a></button>
                <br></br>
                <button className='button'><a href="https://medium.com/@aryangodara_19887">My Articles</a></button>
            </div>
        </section>
    );
}

export default Header;