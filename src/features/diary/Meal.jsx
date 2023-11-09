import './meal.scss';

export default function Meal() {
    return (
        <section className='meal'>
            <div className='meal__header'>
                <div className='meal__info-container'>
                    <h2 className='meal__name'>
                        Breakfast
                    </h2>
                    <div className='meal__nutritions-container'>
                        <p className='meal__nutrition'>
                            552 Cal
                        </p>
                        <p className='meal__nutrition'>
                            21g
                        </p>
                        <p className='meal__nutrition'>
                            14g
                        </p>
                        <p className='meal__nutrition'>
                            45g
                        </p>
                    </div>
                </div>
                <div className='meal__buttons-container'>
                    <button className='meal__show-more-button'>
                        <span className='meal__span'></span>
                        <span className='meal__span'></span>
                        <span className='meal__span'></span>
                    </button>
                    <button className='meal__add-button'>
                        +
                    </button>
                </div>
            </div>
            <ul className='meal-products'>
                <li className='meal-products-item'>
                    <div className='meal-products-item__info-container'>
                        <h3 className='meal-products-item__name'>
                            Bread
                        </h3>
                        <p className='meal-products-item__quantity'>
                            4 slices
                        </p>
                        <div className='meal__nutritions-container'>
                            <p className='meal__nutrition'>
                                300 Cal
                            </p>
                            <p className='meal__nutrition'>
                                10g
                            </p>
                            <p className='meal__nutrition'>
                                1g
                            </p>
                            <p className='meal__nutrition'>
                                36g
                            </p>
                        </div>
                    </div>
                    <div className='meal-products-item__buttons-container'>
                        <button className='meal-products-item__delete-button'>
                            X
                        </button>
                    </div>
                </li>
                <li className='meal-products-item'>
                    <div className='meal-products-item__info-container'>
                        <h3 className='meal-products-item__name'>
                            Butter
                        </h3>
                        <p className='meal-products-item__quantity'>
                            15g
                        </p>
                        <div className='meal__nutritions-container'>
                            <p className='meal__nutrition'>
                                100 Cal
                            </p>
                            <p className='meal__nutrition'>
                                1g
                            </p>
                            <p className='meal__nutrition'>
                                12g
                            </p>
                            <p className='meal__nutrition'>
                                0g
                            </p>
                        </div>
                    </div>
                    <div className='meal-products-item__buttons-container'>
                        <button className='meal-products-item__delete-button'>
                            X
                        </button>
                    </div>
                </li>
                <li className='meal-products-item'>
                    <div className='meal-products-item__info-container'>
                        <h3 className='meal-products-item__name'>
                            Ham
                        </h3>
                        <p className='meal-products-item__quantity'>
                            50g
                        </p>
                        <div className='meal__nutritions-container'>
                            <p className='meal__nutrition'>
                                115 Cal
                            </p>
                            <p className='meal__nutrition'>
                                17g
                            </p>
                            <p className='meal__nutrition'>
                                8g
                            </p>
                            <p className='meal__nutrition'>
                                1g
                            </p>
                        </div>
                    </div>
                    <div className='meal-products-item__buttons-container'>
                        <button className='meal-products-item__delete-button'>
                            X
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    )
}