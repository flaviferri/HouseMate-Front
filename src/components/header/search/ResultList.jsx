import React from 'react'
import Result from './Result'

const ResultsList = ({ results }) => {

  return (
    <div className="absolute w-auto bg-yellow flex flex-col shadow-[1px_0px_2px_#ddd] max-h-[300px] rounded-[1.5rem] lg:mt-[4.8rem] mt-[8.4rem] z-50 top-0 max-w-[15rem] overflow-hidden">
      {results.map((result, id) =>{
        return <Result result={result} key={id} />
      })}
    </div>
  )
}

export default ResultsList
