import { Fragment } from "react"
import { SparklineComponent, SparklineTooltip, Inject } from "@syncfusion/ej2-react-charts"
import { memo } from "react";

export const SparkLine = memo(({ id, height, width, color, data, type, currentcolor }) => {
    return <Fragment>
        {/* <SparklineComponent id={id} height={height} width={width} color={color} dataSource={data} lineWidth={1} fill={color} valueType="Numeric" xName="x" yName="y" type={type} currentcolor={currentcolor} border={{ color: currentcolor, width: 2 }}>
            <Inject services={[SparklineTooltip]}></Inject>
        </SparklineComponent> */}

        <SparklineComponent
            id={id}
            height={height}
            lineWidth={1}
            width={width}
            valueType="Numeric"
            fill={color}
            border={{ color: currentcolor, width: 2 }}
            tooltipSettings={{
                visible: true,
                format: '${x} : data ${yval}',
                trackLineSettings: {
                    visible: true,
                },
            }}
            markerSettings={{ visible: ['All'], size: 2.5, fill: currentcolor }}
            dataSource={data}
            xName="x"
            yName="yval"
            type={type}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    </Fragment>
});