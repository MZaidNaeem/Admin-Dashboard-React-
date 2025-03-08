import React from "react";
import { Fragment } from "react";
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDot } from "react-icons/go";
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy";
import { SparkLine } from "../Components/Charts/SparkLine";
import { Stacked } from "./Charts/Stacked";

export const Ecommerce = () => {
    const dropdown = () => {
        alert(`No Data to Download Yet`);
    }
    const dropdownfunction = (title) => {
        alert(`No ${title} Data To See Yet`);
    }


    return (<Fragment>
        <div className="ecommerece_container flex1 flex_column ">
            <div className="hero_img" >
                <div className="hero_img_content">
                    <h1>Earning</h1>
                    <p>$ 2,000,000</p>
                    <button onClick={dropdown} className="btn btn-primary " >Download</button>
                </div>
            </div>

            <div className="ecommerce_functions flex1  flex_wrap" >
                {earningData.map((items, index) => {
                    return <div key={items.title} shadow={items.iconBg} style={{ backgroundColor: items.iconBg }} className="ecommerce_function flex1 flex_column">
                        <button onClick={() => { dropdownfunction(items.title) }} className="btn function_btn" style={{ color: items.iconColor, backgroundColor: items.iconBg }}>
                            {items.icon}
                        </button>
                        <p>
                            <span>{items.amount}</span>
                            &nbsp;&nbsp;
                            <span style={{ opacity: ".7" }}>{items.percentage}</span>
                        </p>
                        <p >{items.title}</p>
                    </div>
                })}

            </div>

            <div className="graphSection flex1 flex_column">
                <div className="graphSectionHeader flex1 ">
                    <h1>Revenue</h1>
                    <div className="graphHeaderRight">
                        <span><GoDot /> Expense </span>
                        <span style={{ color: "red" }}><GoDot></GoDot> Budget</span>

                    </div>

                </div>
                <div className="graphSectionBody  grid1 grid_two_cols1">
                    <div className="graphSectionBodyLeft flex1 flex_column space_evenly align_center"  >
                        <div className="graph_content flex1 flex_column " style={{ gap: "1rem", marginLeft: "1rem" }}>
                            <div className="graph_left_income"  >
                                <h3>$93438</h3> <span className="badge">EN</span>
                            </div>
                            <div>
                                <h3>$93438</h3>
                            </div>
                        </div>
                        <div >
                            <SparkLine currentcolor="blue" id="line-sparkline" type="Line" height="150" width="190" data={SparklineAreaData} color="blue"></SparkLine>
                        </div>
                        <div className="graphButton" style={{ marginLeft: "1rem" }}>
                            <button className="btn btn-outline-primary">Download Report</button>
                        </div>

                    </div>
                    <div className="graphSectionBodyRight">
                        <Stacked width={"190"} height="100%"></Stacked>
                    </div>
                </div>


            </div>
            <div style={{ marginBottom: "4rem" }}></div>


        </div>
    </Fragment >);
} 