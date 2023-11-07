import DatePicker from "../components/DatePicker";
import SummaryChart from "../components/SummaryChart";
import './home.scss';

export default function Home() {
    return (
        <div className="home">
            <DatePicker />
            <SummaryChart
                heading={'Daily summary'}
                dayValues={{calories: 2300, proteins: 90, fats: 70, carbohydrates: 300}}
                userLimitValues={{caloriesLimit: 2500, proteinsLimit: 100, fatsLimit: 75, carbohydratesLimit: 340}}
            />
        </div>
    )
}