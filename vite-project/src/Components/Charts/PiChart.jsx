import { Fragment } from "react"
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';


export const PiChart = ({ id, data, legendVisiblity, height }) => {
    return <Fragment>
        <AccumulationChartComponent
            id={id}
            legendSettings={{ visible: legendVisiblity, background: 'white' }}
            height={height}
            tooltip={{ enable: true }}
            width="250px"
        >
            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name="Sale"
                    dataSource={data}
                    xName="x"
                    yName="y"
                    innerRadius="40%"
                    startAngle={0}
                    endAngle={360}
                    radius="70%"
                    explode
                    explodeOffset="10%"
                    explodeIndex={2}
                    dataLabel={{
                        visible: true,
                        name: 'text',
                        position: 'Inside',
                        font: {
                            fontWeight: '600',
                            color: '#fff',
                        },
                    }}
                />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    </Fragment>
}