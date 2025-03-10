import React, { Fragment, memo, useContext, useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

export const Orders = memo(() => {
    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <Fragment>
            <div className="orders" style={{ width: "100%", display: "block", overflowY: "scroll", padding: "2rem" }} >
                <GridComponent GridComponent
                    id="gridcomp"
                    dataSource={ordersData}
                    allowPaging
                    allowSorting
                    allowExcelExport
                    allowPdfExport
                    contextMenuItems={contextMenuItems}
                    editSettings={editing}
                    allowResizing={true}
                >
                    <ColumnsDirective  >
                        {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} allowResizing={true} minWidth={"10"} />)}
                    </ColumnsDirective>
                    <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
                </GridComponent>


            </div >
            <div style={{ marginBottom: "8rem" }}></div>
        </Fragment >
    );
});



