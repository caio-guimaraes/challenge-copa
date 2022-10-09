export const Input = ({ name, label, ...props }) => (
    <div className="flex flex-col">
        <label htmlFor={ name } className="text-sm font-bold text-grey-500 mb-2" >{ label }</label>
        <input {...props} name={ name } id={ name } className="p-3 border border-grey-700 rounded-xl focus:outline focus:outline-1 focus:outline-grey-700 " />
    </div>
)