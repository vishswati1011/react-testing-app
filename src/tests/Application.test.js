import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test('Feedback should be displayed after submit',async () =>{

    render(<App/>)

    const textBox = screen.getByRole('textbox')
    const checkBox = screen.getByLabelText('I accept the terms and conditions',{exact:false})
    const btn = screen.getByRole('button',{name:'Add Feedback',exact:false})

    await userEvent.type(textBox,"new feedback")
    await userEvent.click(checkBox)
    await userEvent.click(btn);

    const newFeedbackli = screen.getByText("new feedback",{exact:false})
    expect(newFeedbackli).toBeInTheDocument();
})

test('2 Feedbacks should be displayed after submit',async () =>{
    
    render(<App/>)

    const textBox = screen.getByRole('textbox')
    const checkBox = screen.getByLabelText('I accept the terms and conditions',{exact:false})
    const btn = screen.getByRole('button',{name:'Add Feedback',exact:false})

    await userEvent.type(textBox,"new feedback one")
    await userEvent.click(checkBox)
    await userEvent.click(btn);
    await userEvent.clear(textBox);

    await userEvent.type(textBox,"new feedback two")
    await userEvent.click(btn);


    const allList = screen.getAllByRole("listitem",{exact:false})
    // screen.debug();
    expect(allList.length).toBe(2);
})

// import { screen, render, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "../App";

// test('Feedback should be displayed after submit',async () =>{

//     render(<App/>)

//     const textBox = screen.getByRole('textbox')
//     const checkBox = screen.getByLabelText('I accept the terms and conditions',{exact:false})
//     const btn = screen.getByRole('button',{name:'Add Feedback',exact:false})

//     await userEvent.type(textBox,"new feedback")
//     await userEvent.click(checkBox)
//     await userEvent.click(btn);

//     const newFeedbackli = screen.getByText("new feedback",{exact:false})
//     expect(newFeedbackli).toBeInTheDocument();
// })

// test('2 Feedbacks should be displayed after submit',async () =>{
    
//     render(<App/>)

//     const textBox = screen.getByRole('textbox')
//     const checkBox = screen.getByLabelText('I accept the terms and conditions',{exact:false})
//     const btn = screen.getByRole('button',{name:'Add Feedback',exact:false})

//     await userEvent.type(textBox,"new feedback")
//     await userEvent.click(checkBox)
//     await userEvent.click(btn);

//     await userEvent.type(textBox,"new feedback two")
//     await userEvent.click(btn);

//     const allList = screen.getAllByRole("listitem",{exact:false})
//     expect(allList.length).toBe(2);
// })