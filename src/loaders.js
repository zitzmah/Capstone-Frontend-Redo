const URL = process.env.REACT_APP_URL

export const indexLoader =  async () => {
    const response = await fetch(`${URL}`)
    const allPatients = await response.json()
    return allPatients
}

export const showLoader = async ({params}) => {
    const response = await fetch(`${URL}${params.id}`)
    const aPatient = await response.json()
    return aPatient
}