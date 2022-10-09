import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'

const validationSchema = yup.object().shape({
    homeTeamScore: yup.string().required(),
    awayTeamScore: yup.string().required(),
})

export const Card = ({ gameId, homeTeam, awayTeam , homeTeamScore, awayTeamScore, gameTime, disabled}) => {
    const [auth] = useLocalStorage('auth')

    const formik = useFormik({
        onSubmit: async (values) => {
            axios({
                method: 'post',
                baseURL: 'http://localhost:3000',
                url: '/hunches',
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                },
                data: {
                    ...values,
                    gameId
                }
            })
        },
        initialValues: {
            homeTeamScore: homeTeamScore,
            awayTeamScore: awayTeamScore,
        },
        validationSchema
    })

    return (
        <div className="border border-grey-300 rounded-xl p-4 text-center space-y-4">
            <span className="text-sm md:text-base text-grey-700 font-bold">{gameTime}</span>

            <form className="flex space-x-4 justify-center items-center">
                <span className="uppercase">{homeTeam}</span>
                <img src={`/imgs/flags/${homeTeam}.png`} alt="" />

                <input  
                    className="bg-red-300/[0.2] w-14 h-14 text-red-700 text-xl text-center"
                    type="number" name="homeTeamScore"
                    value={formik.values.homeTeamScore}
                    onChange={formik.handleChange}
                    onBlur={formik.handleSubmit}
                    disabled={disabled}
                />

                <span className='mx-4 text-red-500 font-bold'>X</span>

                <input 
                    className="bg-red-300/[0.2] w-14 h-14 text-red-700 text-xl text-center"
                    type="number" name="awayTeamScore"
                    value={formik.values.awayTeamScore}
                    onChange={formik.handleChange}
                    onBlur={formik.handleSubmit}
                    disabled={disabled}
                />

                <span className="uppercase">{awayTeam}</span>
                <img src={`/imgs/flags/${awayTeam}.png`} alt="" />
            </form>
        </div>
    )
}