import { Fragment } from "react"
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';


export const Area = () => {
    return <Fragment>
        <div className="stackedChart lineChart" >
            <ChartComponent
                id="charts"
                primaryXAxis={areaPrimaryXAxis}
                primaryYAxis={areaPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                legendSettings={{ background: 'white' }}
                width="250px"
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </Fragment >
}