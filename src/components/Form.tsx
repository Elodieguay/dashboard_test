
const Form = () => {
  return (
    <div className="flex  flex-col justify-content-center mx-8 my-4 gap-3 sm:flex-direction-column">
        <h1 className=" text-xl font-bold ">Réponses au questionnaire</h1>
        <div className="flex justify-between">
            <div className=" w-[30%] h-12 bg-gray-200">Box 1</div>
            <div className=" w-[30%] h-12 bg-gray-200">Box 2</div>
            <div className=" w-[30%] h-12 bg-gray-200">Box 3</div>
        </div>
        <div className=" space-y-3">
            <div className="full-width h-12  bg-gray-100">Box 4</div>
            <div className="full-width h-12 bg-gray-100">Box 5</div> 
        </div>
        <div className="flex justify-between">
            <div className="w-[30%] h-12 bg-gray-200">Box 6</div>
            <div className="w-[30%] h-12 bg-gray-200">Box 7</div>
        </div>
        <div className="space-y-3">
            <div className="h-12 bg-gray-200">Box 8</div> 
            <div className="h-12 bg-gray-200">Box 9</div>
        </div>
        <div className="flex justify-between">
            <div className="w-[20%] h-12 bg-gray-200">Box 8</div> 
            <div className="w-[20%] h-12 bg-gray-200">Box 9</div>
            <div className="w-[20%] h-12 bg-gray-200">Box 10</div>
            <div className="w-[20%] h-12 bg-gray-200">Box 11</div>  
        </div>
        
    </div>
  )
}

export default Form