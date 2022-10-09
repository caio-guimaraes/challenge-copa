export const Card = ({ homeTeam, awayTeam , match}) => (
    <div className="border border-grey-300 rounded-xl p-4 text-center space-y-4">
        <span className="text-sm md:text-base text-grey-700 font-bold">{match.time}</span>
        <div className="flex space-x-4 justify-center items-center">
            <span className="uppercase">{homeTeam.slug}</span>
            <img src={`/imgs/flags/${homeTeam.slug}.png`} alt="" />

            <input type="number" className="bg-red-300/[0.2] w-14 h-14 text-red-700 text-xl text-center" />
            <span className='mx-4 text-red-500 font-bold'>X</span>
            <input type="number" className="bg-red-300/[0.2] w-14 h-14 text-red-700 text-xl text-center" />

            <span className="uppercase">{awayTeam.slug}</span>
            <img src={`/imgs/flags/${awayTeam.slug}.png`} alt="" />
        </div>
    </div>
)