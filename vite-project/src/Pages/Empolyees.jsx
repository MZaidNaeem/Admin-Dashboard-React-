

import React, { Fragment, memo } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';

export const Employees = memo(() => {

    const editing = { allowDeleting: true, allowEditing: true };

    return (

        <Fragment>
            <div className="orders">
                <GridComponent
                    dataSource={employeesData}
                    width="auto"
                    allowPaging
                    allowSorting
                    pageSettings={{ pageCount: 5 }}
                    editSettings={editing}
                    allowResizing={true}
                >
                    <ColumnsDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} allowResizing={true} minWidth={"10"} />)}
                    </ColumnsDirective>
                    <Inject services={[Page]} />

                </GridComponent>
            </div>
            <div style={{ marginBottom: "8rem" }}></div>

        </Fragment>
    );
});
