import { Fragment } from "react"
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

export const Bars = () => {
    return <Fragment>
        <div className="stackedChart lineChart" >

            <ChartComponent
                id="charts"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                legendSettings={{ background: 'white' }}
                width="250px"

            >
                <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                <SeriesCollectionDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </Fragment>
}