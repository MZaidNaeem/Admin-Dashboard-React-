import { Fragment } from "react"
import { EditorData } from '../data/dummy';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

export const Editor = () => {
    return <Fragment>
        <RichTextEditorComponent >
            <EditorData />
            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
        <div style={{ marginBottom: "4rem" }}></div>

    </Fragment>
}