import { redirect } from "react-router-dom"

const URL = process.env.REACT_APP_URL;

//CREATE ACTION
export const createAction = async ({ request }) => {
    const formData = await request.formData()

    const newPatient = {
        name: formData.get("name"),
        dateOfBirth: formData.get("dateOfBirth"),
        sex: formData.get("sex"),
        mrn: formData.get("mrn"),
        bloodType: formData.get("bloodType"),
        antibodyScreen: formData.get("antibodyScreen"),
        antibodyID: formData.get("antibodyID")
    }

    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPatient)
    })
    return redirect("/")
}

//UPDATE ACTION
export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id

    const updatedPatient= {
        name: formData.get("name"),
        dateOfBirth: formData.get("dateOfBirth"),
        sex: formData.get("sex"),
        mrn: formData.get("mrn"),
        bloodType: formData.get("bloodType"),
        antibodyScreen: formData.get("antibodyScreen"),
        antibodyID: formData.get("antibodyID")
    }

    await fetch(`${URL}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPatient)
    })
    return redirect(`/`)
}

//DELETE ACTION
export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    return redirect("/")
}