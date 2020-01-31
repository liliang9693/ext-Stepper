
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace Stepper {

    //% block="[OBJ] init PIN1[PIN1] PIN2[PIN2] steps per revolution[STEP] Speed[SPEED]" blockType="command"
    //% OBJ.shadow="dropdown" OBJ.options="OBJ"
    //% PIN1.shadow="dropdown" PIN1.options="PIN1"
    //% PIN2.shadow="dropdown" PIN2.options="PIN2"
    //% STEP.shadow="number" STEP.defl=100
    //% SPEED.shadow="number" SPEED.defl=10
    export function Stepper2Init(parameter: any){
        let obj=parameter.OBJ.code;
        let pin1=parameter.PIN1.code;
        let pin2=parameter.PIN2.code;
        let step=parameter.STEP.code;
        let speed=parameter.SPEED.code; 

        Generator.addInclude("StepperInclude","#include <Stepper.h>");
        Generator.addObject("Object"+obj,"Stepper",`${obj}(${step},${pin1},${pin2});`);
        Generator.addSetup("Setup"+obj,`${obj}.setSpeed(${speed});`);
        
    }

    //% block="[OBJ] init PIN1[PIN1] PIN2[PIN2] PIN3[PIN3] PIN4[PIN4] steps per revolution[STEP] Speed[SPEED]" blockType="command"
    //% OBJ.shadow="dropdown" OBJ.options="OBJ"
    //% PIN1.shadow="dropdown" PIN1.options="PIN1"
    //% PIN2.shadow="dropdown" PIN2.options="PIN2"
    //% PIN3.shadow="dropdown" PIN3.options="PIN3"
    //% PIN4.shadow="dropdown" PIN4.options="PIN4"
    //% STEP.shadow="number" STEP.defl=100
    //% SPEED.shadow="number" SPEED.defl=10
    export function Stepper4Init(parameter: any){
        let obj=parameter.OBJ.code;
        let pin1=parameter.PIN1.code;
        let pin2=parameter.PIN2.code;
        let pin3=parameter.PIN3.code;
        let pin4=parameter.PIN4.code;
        let step=parameter.STEP.code;
        let speed=parameter.SPEED.code; 

        Generator.addInclude("StepperInclude","#include <Stepper.h>");
        Generator.addObject("Object"+obj,"Stepper",`${obj}(${step},${pin1},${pin2},${pin3},${pin4});`);
        Generator.addSetup("Setup"+obj,`${obj}.setSpeed(${speed});`);
        
    }

    //% block="Stepper [OBJ] Step [STEP]" blockType="command"
    //% OBJ.shadow="dropdown" OBJ.options="OBJ"
    //% STEP.shadow="number" STEP.defl=10
    export function StepperStep(parameter: any){
        let obj=parameter.OBJ.code;
        let step=parameter.STEP.code;

        Generator.addCode(`${obj}.step(${step});`);
        
    }


   
}
