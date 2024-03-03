import Button from '../ui/Button';
import './home.scss';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__image-container'>
                <img className='home__image' src='images/home-image.jpg' alt='weight scale with food' />
                <span className='home__attribution'>
                    Designed by <a target='_blank' rel='noreferrer' href='https://www.freepik.com/'>Freepik</a>
                </span>
            </div>
            <div className='home__info-container'>
                <h1 className='home__header'>
                    Stay <span>healthy</span> and maintain your calorie goals
                </h1>
                <p className='home__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec convallis orci.
                    Morbi id lectus vitae augue sodales fringilla. Fusce lacinia tempus lobortis.
                </p>
                <div className='home__button-container'>
                    <Button
                        linkTo={'/register'}
                        width={'10rem'}
                    >
                        Start for free!
                    </Button>
                </div>
            </div>
        </div> 
    )
}
