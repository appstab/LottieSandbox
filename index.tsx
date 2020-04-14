import ReactDOM from "react-dom";
import React from "react";
import Lottie, { Options, EventListener } from 'react-lottie'
import { SuccessAnimationData, ProcessingAnimationData, ErrorAnimationData } from "./animations";

const App = () => {

    const container = { width: "200px", height: "200px" };

    const eventListeners : EventListener[] = [
        {
          eventName: 'complete',
          callback: () => console.log('the animation completed:'),
        },
        {
          eventName: 'loopComplete',
          callback: () => console.log('the animation loop completed:'),
        },
      ]

    const baseOptions = {
        loop: false,
        autoplay: true
    }

    const successOptions: Options = {
        animationData: SuccessAnimationData,
        ...baseOptions
    }
    const processingOptions: Options = {
        ...baseOptions,
        loop: true,
        animationData: ProcessingAnimationData,
    }
    const errorOptions: Options = {
        animationData: ErrorAnimationData,
        ...baseOptions
    }

    return <section style={{ display: "flex" }}>
        <div style={container}> <Lottie options={successOptions} eventListeners={eventListeners} /> </div>
        <div style={container}> <Lottie options={processingOptions} eventListeners={eventListeners} /> </div>
        <div style={container}> <Lottie options={errorOptions} eventListeners={eventListeners} /> </div>
    </ section>
}

ReactDOM.render(<App />, document.getElementById("app"))


