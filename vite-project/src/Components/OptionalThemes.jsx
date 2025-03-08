import { Fragment } from "react"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { FiSettings } from "react-icons/fi"

export const OptionalThemes = () => {
    return <Fragment>
        <div className="OptionalTheme_container"  >
            <TooltipComponent content="Settings" position="Top">
                <span className="OptionalTheme_Icon" style={{ color: "blue" }}><FiSettings /></span>
            </TooltipComponent>
        </div>

    </Fragment >
}