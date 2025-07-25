import { Fragment } from "react"
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';

export const ColorMapping = () => {
    return <Fragment>
        <div className="stackedChart lineChart" >
            <ChartComponent
                id="charts"
                primaryXAxis={ColorMappingPrimaryXAxis}
                primaryYAxis={ColorMappingPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                legendSettings={{ mode: 'Range', background: 'white' }}
                tooltip={{ enable: true }}
                width="250px"
            >
                <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
                <SeriesCollectionDirective>
                    <SeriesDirective
                        dataSource={colorMappingData[0]}
                        name="USA"
                        xName="x"
                        yName="y"
                        type="Column"
                        cornerRadius={{
                            topLeft: 10,
                            topRight: 10,
                        }}
                    />
                </SeriesCollectionDirective>
                <RangeColorSettingsDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
                </RangeColorSettingsDirective>
            </ChartComponent>
        </div>
    </Fragment>
}