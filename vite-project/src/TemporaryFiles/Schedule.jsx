import { useRef } from 'react';
import { ScheduleComponent, Inject, Day, Week, Month, Agenda, MonthAgenda, WorkWeek, TimelineMonth, TimelineViews, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, DragAndDrop, Resize, ExcelExport, HeaderRowsDirective, HeaderRowDirective } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';
import name from "./data.json"

// Register Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVF+WmFZfVtgdVVMYlpbQXRPMyBoS35Rc0ViW3ZfcHZdQ2RUUkF3');

export const Schedule = () => {
    const scheduleObj = useRef(null);

    // Handler for Excel export
    const handleExcelExport = () => {
        const data = {
            fields: ['Id', 'Location'],
            exportType: 'csv',
            fileName: "zaidFirstSchedule",
            // customData: data
        }
        scheduleObj.current.exportToExcel(data);

    };

    const ondragStart = (args) => {
        // Handle drag start logic here
    };

    const onResizeStart = (args) => {
        // Handle resize start logic here
    };


    const onActionComplete = (args) => {

        if (args.requestType === 'eventCreated') {
            console.log('Event created successfully:', args.data);
        } else if (args.requestType === 'eventRemoved') {
            console.log('Event removed successfully:', args.data);
        } else if (args.requestType === 'eventChanged') {
            console.log('Event updated successfully:', args.data);
        }
        console.log(name);
    };



    const template = (args) => {
        return (
            <div className='template-wrap'>
                <div>Subject: {args.Subject}</div>
                <div>Start: {args.StartTime.toString()}</div>
                <div>End: {args.EndTime.toString()}</div>
                <div>Resource: {args.Resource.Name}</div>
            </div>
        );
    };

    const ResourceDataSource = [
        { Name: 'John', Id: 1, Color: "red", Image: "hello.jpg" },
        { Name: 'Steve', Id: 2, Color: "green", Image: "hi,jpg" }
    ];

    const TaskDataSource = [
        { Name: "Task 1", Id: 1, Color: "blue", GroupID: 1 },
        { Name: "Task 2", Id: 2, Color: "pink", GroupID: 2 },
        { Name: "Task 3", Id: 3, Color: "yellow", GroupID: 2 }
    ];

    const groupData = {
        resources: ["Resource", "Task"]
    };

    const giveTemplate = (args) => {
        console.log(args);
        return <h1>helloa</h1>
    }

    return (
        <div>
            <h1>Schedule</h1>
            <button onClick={handleExcelExport}>Export to Excel</button>

            <ScheduleComponent
                ref={scheduleObj}
                currentView="Month"
                eventSettings={{ dataSource: name }}
                dragStart={ondragStart}
                resizeStart={onResizeStart}
                group={groupData}
                // actionBegin={onActionBegin}
                actionComplete={onActionComplete}
            >

                <HeaderRowsDirective>
                    <HeaderRowDirective option='Month'></HeaderRowDirective>
                </HeaderRowsDirective>

                <ResourcesDirective>
                    <ResourceDirective
                        dataSource={ResourceDataSource}
                        field='ResourceId'
                        title='Resource Name'
                        name='Resource'
                        textField='Name'
                        idField='Id'
                        colorField='Color' />
                    <ResourceDirective
                        dataSource={TaskDataSource}
                        field="GroupID"
                        title="Task Name"
                        name="Task"
                        textField="Name"
                        idField="Id"
                        colorField="Color" />
                </ResourcesDirective>

                <ViewsDirective>
                    <ViewDirective option="Day" interval={3} startHour="03:00" endHour="15:00" />
                    <ViewDirective option="Month" showWeekNumber={true} isSelected={true} startHour="03:00" endHour="18:00" />
                    <ViewDirective option="Week" />
                    <ViewDirective option="WorkWeek" />
                    <ViewDirective option="TimelineMonth" allowVirtualScrolling={true} />
                </ViewsDirective>

                <Inject services={[Day, Week, Month, Agenda, MonthAgenda, WorkWeek, TimelineViews, TimelineMonth, DragAndDrop, Resize, ExcelExport]} />
            </ScheduleComponent>
        </div>
    );
};
