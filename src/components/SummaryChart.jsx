import './summaryChart.scss';

export default function SummaryChart({ heading, dayValues, userLimitValues }) {
    const { calories, proteins, fats, carbohydrates } = dayValues;
    const { caloriesLimit, proteinsLimit, fatsLimit, carbohydratesLimit } = userLimitValues;

    return (
        <section className="summary-chart">
            <h2 className='summary-chart__heading'>
                {heading}
            </h2>
            <div className='summary-chart__chart-container'>
                <div className='summary-chart__kcal-container'>
                    {`${calories}/${caloriesLimit}`}
                </div>
                <div className='summary-chart__nutritions-container'>
                    <div className='summary-chart__proteins-container'>
                        {`${proteins}/${proteinsLimit}`}
                    </div>
                    <div className='summary-chart__fats-container'>
                        {`${fats}/${fatsLimit}`}
                    </div>
                    <div className='summary-chart__carbohydrates-container'>
                        {`${carbohydrates}/${carbohydratesLimit}`}
                    </div>
                </div>
            </div>
        </section>
    )
}