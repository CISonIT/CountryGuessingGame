// GET TO STYLE THIS COMPONENT
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldHigh from "@amcharts/amcharts5-geodata/worldHigh";

export const GameComponent = () => {

    useEffect(() => {
        let root = am5.Root.new("chartdiv"); 

        let chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "rotateY",
            wheelY: "zoom",
            pinchZoom: true,
            minZoomLevel: 1,
            maxZoomLevel: 12,
            maxPanOut: 0,
            wheelSensitivity: 1,
            projection: am5map.geoOrthographic(),
        }));

        // Create polygon series
        let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldHigh,
        }));

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            interactive: true
        });

        let backgroundSeries = chart.series.unshift(
            am5map.MapPolygonSeries.new(root, {})
        );
        
        backgroundSeries.mapPolygons.template.setAll({
            fill: am5.color(0xd4f1f9),
            stroke: am5.color(0xd4f1f9),
        });
        
        backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180)
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0x677935)
        });

        return () => {root.dispose()}
    }, [])

    return (
        <div className="container d-flex flex-column bg-secondary text-light align-items-center justify-content-center text-center">
            <div id="chartdiv" className="h-80 w-80 pt-5 pb-5 mb-5"></div>
            <div className="mt-5 display-4">
                COUNTRY TO FIND :
            </div>
        </div>
    )
}