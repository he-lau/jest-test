import { render, screen, fireEvent } from "@testing-library/react";
import { Calculator } from "components/Calculator/Calculator";

describe("<Calculator/>",()=>{
    beforeEach(()=>{
        render(<Calculator/>);
    })
    it("has 'Calculator' displayed'",()=>{
        //screen.debug();
        const textElement = screen.getByText('Calculator');
        //screen.debug(textElement);
        expect(textElement.textContent).toBe('Calculator');
    });

    it("has an h1 containes 'Calculator'",()=>{
        //screen.debug();
        const h1Element = screen.getByRole('heading',{level:1});
        expect(h1Element.textContent).toBe('Calculator');
    });

    it("display empty result by default",()=>{
        const {getValueA, getValueB, getOperator, getResult} = getCalculator();

        expect(getValueA()).toBe("");
        expect(getValueB()).toBe("");
        expect(getOperator()).toBe("sum");
        expect(getResult()).toBe("");
    });

    it("calculates correctly when the user updates inputs",()=>{
        const {getValueA, getValueB, getOperator, getResult} = getCalculator();
        fireEvent.change(screen.getByTestId('inputA'),{target:{value:3}});
        fireEvent.change(screen.getByTestId('inputB'),{target:{value:7}});
        fireEvent.change(screen.getByTestId('operator'),{target:{value:"multiply"}});

        expect(getValueA()).toBe("3");
        expect(getValueB()).toBe("7");
        expect(getOperator()).toBe("multiply");
        expect(getResult()).toBe("21");

        fireEvent.change(screen.getByTestId('operator'),{target:{value:"sum"}});
        expect(getResult()).toBe("10");

        fireEvent.change(screen.getByTestId('operator'),{target:{value:"substract"}});
        expect(getResult()).toBe("-4");

    });   
    
    it("displays an error when divide by 0",()=>{
        const {getValueA, getValueB, getOperator, getResult} = getCalculator();
        fireEvent.change(screen.getByTestId('inputA'),{target:{value:3}});
        fireEvent.change(screen.getByTestId('inputB'),{target:{value:0}});
        fireEvent.change(screen.getByTestId('operator'),{target:{value:"divide"}});
        expect(getResult()).toBe("You can't divide by 0");
    });    

    it("displays an error when the operator is invalid",()=>{
        const {getValueA, getValueB, getOperator, getResult} = getCalculator();
        fireEvent.change(screen.getByTestId('operator'),{target:{value:""}});
        expect(getResult()).toBe("No operator or invalid");



    })
});

const getCalculator = ()=> {
    return {
        getValueA:()=> screen.getByTestId('inputA').value,
        getValueB:()=> screen.getByTestId('inputB').value,
        getOperator:()=> screen.getByTestId('operator').value,
        getResult:()=> screen.getByTestId('result').textContent
    }
}