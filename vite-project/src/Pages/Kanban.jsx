import { Fragment } from "react"
import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';

export const Kanban = () => {
    return <Fragment>
        <KanbanComponent
            id="kanban"
            keyField="Status"
            dataSource={kanbanData}
            cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        >
            <ColumnsDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
        </KanbanComponent>
        <div style={{ marginBottom: "4rem" }}></div>
    </Fragment>
}