import { Fragment } from "react"
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

const date1 = new Date('2017, 1, 1');

// eslint-disable-next-line consistent-return
function filterValue(value) {
    if (value.x >= date1) {
        // eslint-disable-next-line no-sequences
        return value.x, value.high, value.low;
    }
}
const returnValue = financialChartData.filter(filterValue);

export const Financial = () => {
    return <Fragment>
        <div className="stackedChart lineChart" >
            <ChartComponent
                id="charts"
                primaryXAxis={FinancialPrimaryXAxis}
                primaryYAxis={FinancialPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true, shared: true }}
                crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
                width="250px"
            >
                <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
                <SeriesCollectionDirective>
                    <SeriesDirective
                        dataSource={returnValue}
                        xName="x"
                        yName="low"
                        name="Apple Inc"
                        type="Hilo"
                        low="low"
                        high="high"
                    />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </Fragment>
}