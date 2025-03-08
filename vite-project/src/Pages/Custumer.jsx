import React, { Fragment, memo } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';

export const Custumer = memo(() => {
    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <Fragment>
            <div className="orders">
                <GridComponent
                    dataSource={customersData}
                    enableHover={false}
                    allowPaging
                    pageSettings={{ pageCount: 5 }}
                    selectionSettings={selectionsettings}
                    toolbar={toolbarOptions}
                    editSettings={editing}
                    allowSorting
                    allowResizing={true}
                >
                    <ColumnsDirective>
                        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} allowResizing={true} minWidth={"10"} />)}
                    </ColumnsDirective>
                    <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
                </GridComponent>
            </div>
            <div style={{ marginBottom: "8rem" }}></div>

        </Fragment>
    );
});

