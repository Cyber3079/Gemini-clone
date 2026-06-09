import { createContext, useState } from "react";
import main from "../config/gemini"

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");  // for the prompt
    const [recentPrompt, setRecentPrompt] = useState(""); //displayed in the scrren after user has entered his prompt
    const [prevPrompts, setPrevPrompts] = useState([]);// stored in the history and will display in the recent prompt
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");



    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };


    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        let resp;
        setShowResult(true)
        if(prompt !==undefined){
            resp= await main(prompt);
            setRecentPrompt(prompt)

        }else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            resp=await main(input)
        }
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        const response = await main(input)
        let responseArray = response.split("**");
        let newResponse="";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];

            } else {
                newResponse += "<b>" + responseArray[i] + "</br>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let secondRes = newResponse2.split(" ")
        for (let i = 0; i < secondRes.length; i++) {
            const nextWord = secondRes[i];
            delayPara(i, nextWord + " ")
        }

        setLoading(false)
        setInput("")
    }
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput


    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )


}

export default ContextProvider
