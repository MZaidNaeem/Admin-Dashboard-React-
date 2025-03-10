import React, { memo } from 'react';

import { Stacked } from '../../Components/Charts/Stacked';

export const Stack = memo(() => {

    return (

        <div className="stackedChart lineChart" >
            <Stacked width={"250px"} height={"100%"}></Stacked>
        </div>
    );
});

