import BasicProgressBar from './BasicProgressBar';
import CircleProgressBar from './CircleProgressBar';
import './summaryChart.scss';

export default function SummaryChart({ heading, dayValues, userLimitValues }) {
    const { calories, proteins, fats, carbohydrates } = dayValues;
    const { caloriesLimit, proteinsLimit, fatsLimit, carbohydratesLimit } = userLimitValues;

    const aboveCaloriesLimit = (calories - caloriesLimit) > 0;
    const aboveProteinsLimit = (proteins - proteinsLimit) > 0;
    const aboveFatsLimit = (fats - fatsLimit) > 0;
    const aboveCarbohydratesLimit = (carbohydrates - carbohydratesLimit) > 0;

    return (
        <section className="summary-chart">
            <h2 className='summary-chart__heading'>
                {heading}
            </h2>
            <div className='summary-chart__chart-container'>
                <div className='summary-chart__cal-container'>
                    <CircleProgressBar
                        value={calories}
                        limit={caloriesLimit}
                        color={aboveCaloriesLimit ? 'above-limit-progress-color' : 'calories-progress-color'}
                    >
                        {`${calories}/${caloriesLimit} calories`}
                    </CircleProgressBar>
                </div>
                <div className='summary-chart__nutritions-container'>
                    <div className='summary-chart__proteins-container'>
                        <BasicProgressBar
                            value={proteins}
                            limit={proteinsLimit}
                            color={aboveProteinsLimit ? 'above-limit-progress-color' : 'proteins-progress-color'}
                        >
                            {`${proteins}g/${proteinsLimit}g`}
                        </BasicProgressBar>
                    </div>
                    <div className='summary-chart__fats-container'>
                        <BasicProgressBar
                            value={fats}
                            limit={fatsLimit}
                            color={aboveFatsLimit ? 'above-limit-progress-color' : 'fats-progress-color'}
                        >
                            {`${fats}g/${fatsLimit}g`}
                        </BasicProgressBar>
                    </div>
                    <div className='summary-chart__carbohydrates-container'>
                        <BasicProgressBar
                            value={carbohydrates}
                            limit={carbohydratesLimit}
                            color={aboveCarbohydratesLimit ? 'above-limit-progress-color' : 'carbohydrates-progress-color'}
                        >
                            {`${carbohydrates}g/${carbohydratesLimit}g`}
                        </BasicProgressBar>
                    </div>
                </div>
            </div>
        </section>
    )
}